import { NODE_RED_FILE_STORAGE } from '@sh/constants';

import { CONTEXT, VALUES } from './constants';
import { ConfigNodeZwavePickDeviceBackend, NodeContext, NodeContextCommandClass, NodeContextValue } from './types';

export const getValueKey = (commandClassId: number, value: NodeContextValue) =>
  `${VALUES}-${commandClassId}-${value.instanceId}-${value.id}`;

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
