import * as NodeRed from 'node-red';
import { fromPairs, values } from 'lodash';
import JsonLogic from 'json-logic-js';

import { INFLUX_LOGGING, DOMAIN_PRESENCE_DETECTION } from '@sh/constants';
import { ConfigNodeZwavePickDeviceBackend, NodeKeyValues, VALUE_CHANGE_EVENT } from '@sh/config-node-zwave-pick-device';

import { Graph, NodeTypes } from './frontend/types';
import { NodesNormalized, NodeNormalized } from './types';
import {
  NODES_NORMALIZED,
  NODE_NORMALIZED,
  LOCK_TIMEOUT,
  MOTION_TIMEOUT,
  ZONE_PROBABILITY,
  SWITCH_TO_INACTIVE_AFTER,
  SWITCH_TO_INACTIVE_AFTER_TICK,
  DEBUG,
} from './constants';

const getNodeValue = (values: { [nodeId: string]: NodeKeyValues }, condition: any): boolean | undefined => {
  if (
    !values ||
    !condition ||
    !condition.node ||
    !condition.node.id ||
    !condition.logic ||
    !values[condition.node.id]
  ) {
    return undefined;
  }
  return JsonLogic.apply(condition.logic, values[condition.node.id]);
};

export const listenNodeChanges = async (RED: NodeRed.Red, graph: Graph, eventEmitter: NodeJS.EventEmitter) => {
  const nodeIds: string[] = [];
  const nodeIdToNodes: { [nodeId: string]: number[] } = {};

  graph.nodes.forEach(node => {
    if ((node.type === NodeTypes.MOTION_SENSOR || node.type === NodeTypes.OPEN_LOCK_SENSOR) && node.condition) {
      const nodeId = (node.condition as any).node.id;
      if (!nodeIds.includes(nodeId)) {
        nodeIdToNodes[nodeId] = [];
        nodeIds.push(nodeId);
      }
      nodeIdToNodes[nodeId].push(node.id);
    }
  });

  const nodes: ConfigNodeZwavePickDeviceBackend[] = nodeIds
    .map(nodeId => RED.nodes.getNode(nodeId) as any)
    .filter(node => !!node) as any;

  const values: { [nodeId: string]: NodeKeyValues } = fromPairs(
    await Promise.all(nodes.map(async node => [node.id, await node.getValues()]))
  );

  const nodesNormalized = graph.nodes.reduce((acc, node) => {
    const { edges } = graph;

    const nodeNormalized: NodeNormalized = {
      id: node.id,
      title: node.title,
      tags: node.tags,
      type: node.type,
      nodeId: node.nodeId,
      value: getNodeValue(values, node.condition),
      condition: node.condition,
      valueChangedAt: Date.now(),
      dependencies: edges.reduce((acc, edge) => {
        if (edge.target === node.id) {
          acc.push(edge.source);
        }
        return acc;
      }, [] as number[]),
      dependents: edges.reduce((acc, edge) => {
        if (edge.source === node.id) {
          acc.push(edge.target);
        }
        return acc;
      }, [] as number[]),
    };

    eventEmitter.emit(INFLUX_LOGGING, {
      topic: INFLUX_LOGGING,
      payload: [
        {
          value: String(nodeNormalized.value),
        },
        {
          timestamp: Date.now(),
          domain: DOMAIN_PRESENCE_DETECTION,
          event: 'init-nodes-normalized',
          type: nodeNormalized.type,
          title: nodeNormalized.title,
          nodeId: nodeNormalized.nodeId,
        },
      ],
    });
    acc[node.id] = nodeNormalized;

    return acc;
  }, {} as NodesNormalized);

  eventEmitter.emit(NODES_NORMALIZED, nodesNormalized);

  const valueChangeListener = ({ topic, nodeId, payload }) => {
    values[nodeId][topic] = payload;
    if (nodeIdToNodes[nodeId]) {
      nodeIdToNodes[nodeId].forEach(nodesNormalizedId => {
        const newValue = getNodeValue(values, nodesNormalized[nodesNormalizedId].condition);
        if (newValue !== nodesNormalized[nodesNormalizedId].value) {
          nodesNormalized[nodesNormalizedId].value = newValue;
          nodesNormalized[nodesNormalizedId].valueChangedAt = Date.now();

          eventEmitter.emit(INFLUX_LOGGING, {
            topic: INFLUX_LOGGING,
            payload: [
              {
                value: String(nodesNormalized[nodesNormalizedId].value),
              },
              {
                timestamp: Date.now(),
                domain: DOMAIN_PRESENCE_DETECTION,
                event: 'node-value-changed',
                type: nodesNormalized[nodesNormalizedId].type,
                title: nodesNormalized[nodesNormalizedId].title,
                nodeId: nodesNormalized[nodesNormalizedId].nodeId,
              },
            ],
          });

          eventEmitter.emit(NODE_NORMALIZED, nodesNormalized[nodesNormalizedId]);
        }
      });
    }
  };

  nodes.forEach(node => {
    node.on(VALUE_CHANGE_EVENT, valueChangeListener);
  });

  return () => {
    nodes.forEach(node => {
      node.off(VALUE_CHANGE_EVENT, valueChangeListener);
    });
    nodeIds.length = 0;
    nodes.length = 0;
  };
};

const getAllDependentZones = (nodesNormalized: NodesNormalized, dependents: number[]) =>
  dependents.reduce((acc, nodeId) => {
    const node = nodesNormalized[nodeId];
    if (node.type === NodeTypes.ZONE) {
      acc.push(node);
    }
    return acc;
  }, [] as NodeNormalized[]);

const getAllZones = (nodesNormalized: NodesNormalized) =>
  values(nodesNormalized).reduce((acc, node) => {
    if (node.type === NodeTypes.ZONE) {
      acc.push(node);
    }
    return acc;
  }, [] as NodeNormalized[]);

const getZoneIsActiveProbability = (dependencies: number[], probabilities) => {
  const activeProbabilities = dependencies
    .map(dependencyId => {
      const probability = probabilities[dependencyId];
      if (!probability) {
        return {
          value: false,
          probability: 1,
        };
      }
      if (!probability.value) {
        return {
          value: true,
          probability: 1 - probability.probability,
        };
      }
      return probability;
    })
    .filter(({ probability }) => !!probability);

  if (activeProbabilities.length === 0) {
    return {
      value: false,
      probability: 1,
    };
  } else if (activeProbabilities.length === 1) {
    return activeProbabilities[0];
  } else if (activeProbabilities.length === 2) {
    const a: number = activeProbabilities[0].probability;
    const b: number = activeProbabilities[1].probability;

    return {
      value: true,
      probability: a + b - a * b,
    };
  } else {
    throw new Error('Unsupported number of probabilites');
  }
};

const allDependenciesAreTrue = (nodesNormalized: NodesNormalized, dependencies: number[]): boolean =>
  dependencies.every(dependencyId => {
    const nodeNormalized = nodesNormalized[dependencyId];
    const timeout = (() => {
      switch (nodeNormalized.type) {
        case NodeTypes.MOTION_SENSOR:
        default:
          return MOTION_TIMEOUT;
        case NodeTypes.OPEN_LOCK_SENSOR:
          return LOCK_TIMEOUT;
      }
    })();
    DEBUG &&
      console.log(
        `allDependenciesAreTrue [${nodeNormalized.type}]: ${nodeNormalized.title} value[${
          nodeNormalized.value
        }] timeout[${nodeNormalized.valueChangedAt + timeout <= Date.now()}] return [${
          nodeNormalized.valueChangedAt + timeout <= Date.now() ? !!nodeNormalized.value : !nodeNormalized.value
        }] timeoutDiff[${nodeNormalized.valueChangedAt + timeout - Date.now()}]`
      );
    if (nodeNormalized.valueChangedAt + timeout <= Date.now()) {
      return !!nodeNormalized.value;
    }

    return !nodeNormalized.value;
  });

const debugNodeInfo = (nodeNormalized: NodeNormalized, probability, reason) => {
  DEBUG &&
    console.log(
      `${nodeNormalized.title} value[${probability.value}] probability[${probability.probability}] because of ${reason}`
    );
};

export const basicProbabilityAnalyzer = (input: NodeJS.EventEmitter, output: NodeJS.EventEmitter) => {
  const probabilities = {} as any;
  let cacheNodesNormalized: NodesNormalized = {};

  const listenToInactiveAfter = setInterval(() => {
    values(cacheNodesNormalized).forEach(node => {
      const prob = probabilities[node.id];
      if (
        node.type === NodeTypes.MOTION_SENSOR &&
        prob &&
        (prob.value
          ? prob.probability <= 0.5 && prob.probability > 0
          : prob.probability >= 0.5 && prob.probability < 1) &&
        node.valueChangedAt + SWITCH_TO_INACTIVE_AFTER <= Date.now()
      ) {
        prob.value = false;
        prob.probability = 1;
        getAllDependentZones(cacheNodesNormalized, node.dependents).forEach(zone => {
          probabilities[zone.id] = getZoneIsActiveProbability(zone.dependencies, probabilities);
          debugNodeInfo(zone, probabilities[zone.id], 'calculated based on dependencies');

          input.emit(INFLUX_LOGGING, {
            topic: INFLUX_LOGGING,
            payload: [
              {
                value: String(probabilities[zone.id].value),
              },
              {
                timestamp: Date.now(),
                probability: probabilities[zone.id].probability,
                domain: DOMAIN_PRESENCE_DETECTION,
                event: 'probability-based-on-dependencies',
                type: zone.type,
                title: zone.title,
                nodeId: zone.nodeId,
              },
            ],
          });

          output.emit(ZONE_PROBABILITY, {
            zone,
            value: probabilities[zone.id].value,
            probability: probabilities[zone.id].probability,
          });
        });
      }
    });
  }, SWITCH_TO_INACTIVE_AFTER_TICK);

  const listenNodes = (nodesNormalized: NodesNormalized) => {
    cacheNodesNormalized = nodesNormalized;
    values(nodesNormalized).forEach(node => {
      // if (node.type === NodeTypes.MOTION_SENSOR) {
      probabilities[node.id] = {
        value: node.value,
        probability: 1,
      };

      input.emit(INFLUX_LOGGING, {
        topic: INFLUX_LOGGING,
        payload: [
          {
            value: String(probabilities[node.id].value),
          },
          {
            probability: probabilities[node.id].probability,
            timestamp: Date.now(),
            domain: DOMAIN_PRESENCE_DETECTION,
            event: 'probability-initiated',
            type: node.type,
            title: node.title,
            nodeId: node.nodeId,
          },
        ],
      });

      debugNodeInfo(node, probabilities[node.id], 'initiated');
      // }
    });
    getAllZones(cacheNodesNormalized).forEach(zone => {
      probabilities[zone.id] = getZoneIsActiveProbability(zone.dependencies, probabilities);
      debugNodeInfo(zone, probabilities[zone.id], 'calculated based on dependencies');

      input.emit(INFLUX_LOGGING, {
        topic: INFLUX_LOGGING,
        payload: [
          {
            value: String(probabilities[zone.id].value),
          },
          {
            probability: probabilities[zone.id].probability,
            timestamp: Date.now(),
            domain: DOMAIN_PRESENCE_DETECTION,
            event: 'probability-initiated',
            type: zone.type,
            title: zone.title,
            nodeId: zone.nodeId,
          },
        ],
      });

      output.emit(ZONE_PROBABILITY, {
        zone,
        value: probabilities[zone.id].value,
        probability: probabilities[zone.id].probability,
      });
    });
  };

  const listenNode = (nodeNormalized: NodeNormalized) => {
    cacheNodesNormalized[nodeNormalized.id] = nodeNormalized;
    let changed = false;
    DEBUG && console.log(`listenNode [${nodeNormalized.type}]: ${nodeNormalized.title}`);
    // Update own probability
    // if (nodeNormalized.type === NodeTypes.MOTION_SENSOR) {
    if (
      nodeNormalized.dependencies.length &&
      !allDependenciesAreTrue(cacheNodesNormalized, nodeNormalized.dependencies)
    ) {
      if (nodeNormalized.value !== probabilities[nodeNormalized.id].value && nodeNormalized.value) {
        probabilities[nodeNormalized.id] = {
          value: nodeNormalized.value,
          probability: 1,
        };

        input.emit(INFLUX_LOGGING, {
          topic: INFLUX_LOGGING,
          payload: [
            {
              value: String(probabilities[nodeNormalized.id].value),
            },
            {
              probability: probabilities[nodeNormalized.id].probability,
              timestamp: Date.now(),
              domain: DOMAIN_PRESENCE_DETECTION,
              event: 'probability-all-dependencies-are-inactive',
              type: nodeNormalized.type,
              title: nodeNormalized.title,
              nodeId: nodeNormalized.nodeId,
            },
          ],
        });

        debugNodeInfo(nodeNormalized, probabilities[nodeNormalized.id], 'all dependencies are inactive');
        changed = true;
      }
    } else {
      probabilities[nodeNormalized.id] = {
        value: nodeNormalized.value,
        probability: nodeNormalized.value ? 1 : 0.5,
      };

      input.emit(INFLUX_LOGGING, {
        topic: INFLUX_LOGGING,
        payload: [
          {
            value: String(probabilities[nodeNormalized.id].value),
          },
          {
            probability: probabilities[nodeNormalized.id].probability,
            timestamp: Date.now(),
            domain: DOMAIN_PRESENCE_DETECTION,
            event: nodeNormalized.value
              ? 'motion-was-just-detected'
              : 'cannot-detect-exact-probability-because-of-unknowns',
            type: nodeNormalized.type,
            title: nodeNormalized.title,
            nodeId: nodeNormalized.nodeId,
          },
        ],
      });

      debugNodeInfo(
        nodeNormalized,
        probabilities[nodeNormalized.id],
        nodeNormalized.value ? 'motion just was detected' : "can't detect exact probability because of unknowns"
      );
      changed = true;
    }
    // }
    // Update zone probability
    if (changed) {
      getAllDependentZones(cacheNodesNormalized, nodeNormalized.dependents).forEach(zone => {
        probabilities[zone.id] = getZoneIsActiveProbability(zone.dependencies, probabilities);

        input.emit(INFLUX_LOGGING, {
          topic: INFLUX_LOGGING,
          payload: [
            {
              value: String(probabilities[zone.id].value),
            },
            {
              probability: probabilities[zone.id].probability,
              timestamp: Date.now(),
              domain: DOMAIN_PRESENCE_DETECTION,
              event: 'calculated-based-on-dependencies',
              type: zone.type,
              title: zone.title,
              nodeId: zone.nodeId,
            },
          ],
        });
        debugNodeInfo(zone, probabilities[zone.id], 'calculated based on dependencies');
        output.emit(ZONE_PROBABILITY, {
          zone,
          value: probabilities[zone.id].value,
          probability: probabilities[zone.id].probability,
        });
      });
    }
  };

  input.on(NODES_NORMALIZED, listenNodes);
  input.on(NODE_NORMALIZED, listenNode);

  return () => {
    input.off(NODES_NORMALIZED, listenNodes);
    input.off(NODE_NORMALIZED, listenNode);
    clearInterval(listenToInactiveAfter);
  };
};
