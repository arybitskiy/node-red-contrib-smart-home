import * as NodeRed from 'node-red';

import { NODE_RED_FILE_STORAGE } from '@sh/constants';

import { CONTEXT, VALUES, MQTT_PREFIX, NODE_TYPE } from './constants';
import {
  ConfigNodeZwavePickDeviceBackend,
  NodeContext,
  NodeContextCommandClass,
  NodeContextValue,
  NodeKeyValues,
  NodesKeyValues,
} from './types';

export const getValueKey = (commandClassId: number, value: NodeContextValue) =>
  `${VALUES}-${commandClassId}-${value.instanceId}-${value.id}`;

const parseValueKeyRegexp = new RegExp(`^${VALUES}-(\\d+)-(\\d+)-(\\d+)$`);
export const parseValueKey = (key: string) => {
  const result = parseValueKeyRegexp.exec(key);
  if (!result) {
    throw new Error(`Wrong value key ${key}`);
  }

  const [, commandClassId, instanceId, valueId] = result;

  return {
    commandClassId: parseInt(commandClassId, 10),
    instanceId: parseInt(instanceId, 10),
    valueId: parseInt(valueId, 10),
  };
};

export const getSetValueTopic = (nodeId: number, commandClassId: number, instanceId: number, valueId: number) =>
  `${MQTT_PREFIX}/${nodeId}/${commandClassId}/${instanceId}/${valueId}/set`;

export const readNodeContext = (node: ConfigNodeZwavePickDeviceBackend): Promise<NodeContext> =>
  new Promise(resolve => {
    node.context().get(CONTEXT, NODE_RED_FILE_STORAGE, (err: Error, context: NodeContext | undefined) => {
      if (err || typeof context === 'undefined') {
        resolve({ commandClasses: [] });
      } else {
        resolve(context);
      }
    });
  });

export const writeNodeContext = (node: ConfigNodeZwavePickDeviceBackend, context: NodeContext): Promise<void> =>
  new Promise((resolve, reject) => {
    node.context().set(CONTEXT, context, NODE_RED_FILE_STORAGE, (err: Error) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

export const setValue = (
  { commandClasses, ...rest }: NodeContext,
  commandClassId: number,
  value: NodeContextValue
): NodeContext => ({
  commandClasses: (commandClasses.find(({ id }) => id === commandClassId)
    ? commandClasses
    : ([{ id: commandClassId, values: [] }, ...commandClasses] as NodeContextCommandClass[])
  ).map(commandClass => {
    const { id, values, ...rest } = commandClass;

    if (id !== commandClassId) {
      return commandClass;
    }

    return {
      id,
      values: (values.find(({ instanceId: instId, id: valId }) => instId === value.instanceId && valId === value.id)
        ? values
        : [value, ...values]
      ).map(val => {
        if (val.instanceId !== value.instanceId || val.id !== value.id) {
          return val;
        }

        return value;
      }),
      ...rest,
    };
  }),
  ...rest,
});

export const getCurrentValue = (
  { commandClasses }: NodeContext,
  commandClassId: number,
  instanceId: number,
  valueId: number
) =>
  commandClasses
    ?.find(({ id }) => id === commandClassId)
    ?.values?.find(({ instanceId: instId, id }) => instId === instanceId && id === valueId);

export const getValues = ({ commandClasses }: NodeContext) =>
  commandClasses.reduce((acc, commandClass) => {
    commandClass.values.forEach(value => {
      acc[getValueKey(commandClass.id, value)] = value.value;
    });

    return acc;
  }, {} as NodeKeyValues);

export const getNodesKeyValuesFromRED = async (RED: NodeRed.Red) => {
  const nodes: ConfigNodeZwavePickDeviceBackend[] = [];
  RED.nodes.eachNode(nodeObject => {
    if (nodeObject.type === NODE_TYPE) {
      const node = RED.nodes.getNode(nodeObject.id) as ConfigNodeZwavePickDeviceBackend | null;
      if (node) {
        nodes.push(node);
      }
    }
  });

  const nodesKeyValues: NodesKeyValues = {};
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    nodesKeyValues[node.getNodeId()] = await node.getValues();
  }

  return nodesKeyValues;
};
