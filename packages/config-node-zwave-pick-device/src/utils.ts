import { NODE_RED_FILE_STORAGE } from '@sh/constants';

import { CONTEXT, VALUES, MQTT_PREFIX } from './constants';
import { ConfigNodeZwavePickDeviceBackend, NodeContext, NodeContextCommandClass, NodeContextValue } from './types';

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
