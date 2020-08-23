import { values } from 'lodash';

import { INFLUX_LOGGING, DOMAIN_PRESENCE_DETECTION } from '@sh/constants';

import { NodeTypes } from './frontend/types';
import { NodesNormalized, NodeNormalized, Probabilities } from './types';
import {
  NODES_NORMALIZED,
  NODE_NORMALIZED,
  LOCK_TIMEOUT,
  MOTION_TIMEOUT,
  ZONE_PROBABILITY,
  SWITCH_TO_INACTIVE_AFTER,
  SWITCH_TO_INACTIVE_AFTER_TICK,
} from './constants';

const fluxLogNodeWithProbability = (nodeNormalized: NodeNormalized, probability: number, comment) => ({
  topic: INFLUX_LOGGING,
  payload: [
    {
      value: String(probability),
    },
    {
      timestamp: Date.now(),
      domain: DOMAIN_PRESENCE_DETECTION,
      event: comment,
      type: nodeNormalized.type,
      title: nodeNormalized.title,
      nodeId: nodeNormalized.nodeId,
    },
  ],
});

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

const getZoneProbabilityBasedOnDependencies = (dependencies: number[], probabilities: Probabilities) => {
  const activeProbabilities = dependencies
    .map(dependencyId => probabilities[dependencyId])
    .filter(probability => probability > 0.5);

  if (activeProbabilities.length === 0) {
    return 0;
  } else if (activeProbabilities.length === 1) {
    return activeProbabilities[0];
  } else if (activeProbabilities.length === 2) {
    const a: number = activeProbabilities[0];
    const b: number = activeProbabilities[1];

    return a + b - a * b;
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
    if (nodeNormalized.valueChangedAt + timeout <= Date.now()) {
      return !!nodeNormalized.value;
    }

    return !nodeNormalized.value;
  });

export const startBasicProbabilityProcessor = (input: NodeJS.EventEmitter, output: NodeJS.EventEmitter) => {
  const probabilities: Probabilities = {};
  let cacheNodesNormalized: NodesNormalized = {};

  // <<<< periodicallyResetProbabilityOfMotionSensors
  // Every ${SWITCH_TO_INACTIVE_AFTER_TICK} resets probability of motion sensors to 0
  // if probability less then or equal 0.5
  const periodicallyResetProbabilityOfMotionSensors = setInterval(() => {
    // But in the end we are updating only zones, other nodes are not supported
    const dependentsToBeRefreshed: number[] = [];
    values(cacheNodesNormalized).forEach(node => {
      const probability = probabilities[node.id];
      if (
        node.type === NodeTypes.MOTION_SENSOR &&
        probability > 0 &&
        probability <= 0.5 &&
        node.valueChangedAt + SWITCH_TO_INACTIVE_AFTER <= Date.now()
      ) {
        probabilities[node.id] = 0;
        input.emit(INFLUX_LOGGING, fluxLogNodeWithProbability(node, probabilities[node.id], 'reset-probability-to-0'));
        node.dependents.forEach(dependentId => {
          if (!dependentsToBeRefreshed.includes(dependentId)) {
            dependentsToBeRefreshed.push(dependentId);
          }
        });
      }
    });

    getAllDependentZones(cacheNodesNormalized, dependentsToBeRefreshed).forEach(zone => {
      probabilities[zone.id] = getZoneProbabilityBasedOnDependencies(zone.dependencies, probabilities);

      input.emit(
        INFLUX_LOGGING,
        fluxLogNodeWithProbability(zone, probabilities[zone.id], 'probability-based-on-dependencies')
      );

      output.emit(ZONE_PROBABILITY, {
        zone,
        probability: probabilities[zone.id],
      });
    });
  }, SWITCH_TO_INACTIVE_AFTER_TICK);
  // periodicallyResetProbabilityOfMotionSensors >>>>

  // <<<< listenNodes
  const listenNodes = (nodesNormalized: NodesNormalized) => {
    cacheNodesNormalized = nodesNormalized;
    // Initiate
    values(nodesNormalized).forEach(node => {
      probabilities[node.id] = node.value ? 1 : 0;

      input.emit(INFLUX_LOGGING, fluxLogNodeWithProbability(node, probabilities[node.id], 'probability-initiated'));
    });

    getAllZones(cacheNodesNormalized).forEach(zone => {
      probabilities[zone.id] = getZoneProbabilityBasedOnDependencies(zone.dependencies, probabilities);

      input.emit(
        INFLUX_LOGGING,
        fluxLogNodeWithProbability(zone, probabilities[zone.id], 'zone-probability-initiated')
      );

      output.emit(ZONE_PROBABILITY, {
        zone,
        probability: probabilities[zone.id],
      });
    });
  };
  // listenNodes >>>>

  // <<<< listenNode
  const listenNode = (nodeNormalized: NodeNormalized) => {
    cacheNodesNormalized[nodeNormalized.id] = nodeNormalized;
    let changed = false;
    // Update own probability
    if (nodeNormalized.type === NodeTypes.MOTION_SENSOR) {
      if (
        nodeNormalized.dependencies.length &&
        !allDependenciesAreTrue(cacheNodesNormalized, nodeNormalized.dependencies)
      ) {
        const probability = nodeNormalized.value ? 1 : 0;
        if (probability !== probabilities[nodeNormalized.id]) {
          probabilities[nodeNormalized.id] = probability;
          changed = true;

          input.emit(
            INFLUX_LOGGING,
            fluxLogNodeWithProbability(nodeNormalized, probability, 'probability-all-dependencies-are-inactive')
          );
        }
      } else {
        const probability = nodeNormalized.value ? 1 : 0.5;
        probabilities[nodeNormalized.id] = probability;
        changed = true;

        input.emit(
          INFLUX_LOGGING,
          fluxLogNodeWithProbability(
            nodeNormalized,
            probability,
            nodeNormalized.value ? 'motion-was-just-detected' : 'cannot-detect-exact-probability-because-of-unknowns'
          )
        );
      }
    } else if (nodeNormalized.type === NodeTypes.OPEN_LOCK_SENSOR) {
      const probability = nodeNormalized.value ? 1 : 0;
      probabilities[nodeNormalized.id] = probability;
      changed = true;

      input.emit(INFLUX_LOGGING, fluxLogNodeWithProbability(nodeNormalized, probability, 'lock-unlock-probability'));
    }

    // Update zone probability
    if (changed) {
      getAllDependentZones(cacheNodesNormalized, nodeNormalized.dependents).forEach(zone => {
        probabilities[zone.id] = getZoneProbabilityBasedOnDependencies(zone.dependencies, probabilities);

        input.emit(
          INFLUX_LOGGING,
          fluxLogNodeWithProbability(zone, probabilities[zone.id], 'probability-based-on-dependencies')
        );

        output.emit(ZONE_PROBABILITY, {
          zone,
          probability: probabilities[zone.id],
        });
      });
    }
  };
  // listenNode >>>>

  input.on(NODES_NORMALIZED, listenNodes);
  input.on(NODE_NORMALIZED, listenNode);

  return () => {
    input.off(NODES_NORMALIZED, listenNodes);
    input.off(NODE_NORMALIZED, listenNode);
    clearInterval(periodicallyResetProbabilityOfMotionSensors);
  };
};
