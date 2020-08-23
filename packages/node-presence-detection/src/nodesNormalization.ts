import * as NodeRed from 'node-red';
import { fromPairs } from 'lodash';
import JsonLogic from 'json-logic-js';

import { INFLUX_LOGGING, DOMAIN_PRESENCE_DETECTION } from '@sh/constants';
import { ConfigNodeZwavePickDeviceBackend, NodeKeyValues, VALUE_CHANGE_EVENT } from '@sh/config-node-zwave-pick-device';

import { Graph, NodeTypes } from './frontend/types';
import { NodesNormalized, NodeNormalized } from './types';
import { NODES_NORMALIZED, NODE_NORMALIZED } from './constants';

const executeConditionFromNodeValues = (
  values: { [nodeId: string]: NodeKeyValues },
  condition: any
): boolean | undefined => {
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

const fluxLogNodeNormalized = (nodeNormalized: NodeNormalized, comment) => ({
  topic: INFLUX_LOGGING,
  payload: [
    {
      value: String(nodeNormalized.value),
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

export const startNodesNormalization = async (RED: NodeRed.Red, graph: Graph, eventEmitter: NodeJS.EventEmitter) => {
  const nodeRedNodeIds: string[] = [];
  const mapNodeRedNodeIdToGraphNodeDependents: { [nodeId: string]: number[] } = {};
  graph.nodes.forEach(node => {
    if ((node.type === NodeTypes.MOTION_SENSOR || node.type === NodeTypes.OPEN_LOCK_SENSOR) && node.condition) {
      const nodeId = (node.condition as any).node.id;
      if (!nodeRedNodeIds.includes(nodeId)) {
        mapNodeRedNodeIdToGraphNodeDependents[nodeId] = [];
        nodeRedNodeIds.push(nodeId);
      }
      mapNodeRedNodeIdToGraphNodeDependents[nodeId].push(node.id);
    }
  });

  const nodeRedNodes: ConfigNodeZwavePickDeviceBackend[] = nodeRedNodeIds
    .map(nodeRedNodeId => RED.nodes.getNode(nodeRedNodeId) as any)
    .filter(node => !!node) as any;

  let values: { [nodeRedNodeId: string]: NodeKeyValues } = fromPairs(
    await Promise.all(nodeRedNodes.map(async node => [node.id, await node.getValues()]))
  );

  const nodesNormalized = graph.nodes.reduce((acc, node) => {
    const { edges } = graph;

    const nodeNormalized: NodeNormalized = {
      id: node.id,
      title: node.title,
      tags: node.tags,
      type: node.type,
      nodeId: node.nodeId,
      value: executeConditionFromNodeValues(values, node.condition),
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

    eventEmitter.emit(INFLUX_LOGGING, fluxLogNodeNormalized(nodeNormalized, 'init-graph-nodes-normalization'));
    acc[node.id] = nodeNormalized;

    return acc;
  }, {} as NodesNormalized);

  const valueChangeListener = ({ topic, nodeId, payload }) => {
    values[nodeId][topic] = payload;
    if (mapNodeRedNodeIdToGraphNodeDependents[nodeId]) {
      mapNodeRedNodeIdToGraphNodeDependents[nodeId].forEach(nodesNormalizedId => {
        const newValue = executeConditionFromNodeValues(values, nodesNormalized[nodesNormalizedId].condition);
        if (newValue !== nodesNormalized[nodesNormalizedId].value) {
          nodesNormalized[nodesNormalizedId].value = newValue;
          nodesNormalized[nodesNormalizedId].valueChangedAt = Date.now();

          eventEmitter.emit(
            INFLUX_LOGGING,
            fluxLogNodeNormalized(nodesNormalized[nodesNormalizedId], 'graph-node-value-changed')
          );

          eventEmitter.emit(NODE_NORMALIZED, nodesNormalized[nodesNormalizedId]);
        }
      });
    }
  };

  eventEmitter.emit(NODES_NORMALIZED, nodesNormalized);

  nodeRedNodes.forEach(node => {
    node.on(VALUE_CHANGE_EVENT, valueChangeListener);
  });

  return () => {
    nodeRedNodes.forEach(node => {
      node.off(VALUE_CHANGE_EVENT, valueChangeListener);
    });
    nodeRedNodeIds.length = 0;
    nodeRedNodes.length = 0;
    values = {};
  };
};
