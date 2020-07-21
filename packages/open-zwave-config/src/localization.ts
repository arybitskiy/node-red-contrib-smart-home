import { memoize } from 'lodash';

import type { NodeContext } from '@sh/config-node-zwave-pick-device';
import { getValueKey } from '@sh/config-node-zwave-pick-device';
import { SELECT_VALUE } from '@sh/text-constants';

import { LocalizationConfig } from './generated';
import { getLabel } from './utils';

export const localization = memoize(() => {
  if (!LocalizationConfig?.Localization?.CommandClass) {
    throw new Error('Wrong Localization config');
  }
  return {
    commandClasses: LocalizationConfig.Localization.CommandClass.map(({ id, Label, Value }) => ({
      id: parseInt(id, 10),
      label: getLabel(Label),
      values: Value?.map(({ index, Label, ItemLabel }) => ({
        id: parseInt(index, 10),
        label: getLabel(Label),
        options: ItemLabel?.map(({ text, itemIndex }) => ({
          id: parseInt(itemIndex, 10),
          label: text || '',
        })),
      })),
    })),
  };
});

export const getDeviceOptions = (context: NodeContext, addEmpty = false) =>
  context.commandClasses.reduce(
    (acc, { id: commandClassId, values }) => {
      values.forEach(({ instanceId, valueId }) => {
        const key = getValueKey(commandClassId, instanceId, valueId);
        const label =
          localization()
            .commandClasses.find(({ id }) => id === commandClassId)
            ?.values?.find(({ id }) => id === valueId)?.label || key;

        acc.push({
          id: key,
          text: label,
        });
      });

      return acc;
    },
    [...(addEmpty ? [{ id: '', text: SELECT_VALUE }] : [])] as { id: string; text: string }[]
  );
