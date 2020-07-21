import { NODE_RED_FILE_STORAGE } from '@sh/constants';

import { CONTEXT } from './constants';
import { ConfigNodeZwavePickDeviceBackend, NodeContext, NodeValue, NodeContextCommandClass } from './types';

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
    console.log('context: ', context);
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
  instanceId: number,
  valueId: number,
  value: NodeValue
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
      values: (values.find(({ instanceId: instId, valueId: valId }) => instId === instanceId && valId === valueId)
        ? values
        : [{ instanceId, valueId, value }, ...values]
      ).map(val => {
        const { instanceId: instId, valueId: valId, ...rest } = val;
        if (instId !== instanceId || valId !== valueId) {
          return val;
        }

        return {
          ...rest,
          instanceId,
          valueId,
          value,
        };
      }),
      ...rest,
    };
  }),
  ...rest,
});
