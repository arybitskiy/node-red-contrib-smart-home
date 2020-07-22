import { memoize } from 'lodash';

import type { NodeContext } from '@sh/config-node-zwave-pick-device';
import { getValueKey } from '@sh/config-node-zwave-pick-device';
import { SELECT_VALUE } from '@sh/text-constants';
import type { Option, DropdownOptions } from '@sh/types';

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

export const getValueOptionFromLocalization = (
  commandClassId: number,
  valueId: number,
  index: number,
  optionValue: string
) => {
  const option = localization()
    .commandClasses.find(({ id }) => id === commandClassId)
    ?.values?.find(({ id }) => id === valueId)
    ?.options?.find(({ label }) => label === optionValue);

  if (option) {
    return {
      id: option.id,
      index,
      value: optionValue,
    };
  }
};

interface GetDeviceOptionsParams {
  addEmpty?: boolean;
  skipReadOnly?: boolean;
  skipWriteOnly?: boolean;
}
export const getDeviceOptions = (
  context: NodeContext,
  { addEmpty = false, skipReadOnly = false, skipWriteOnly = false }: GetDeviceOptionsParams = {}
) =>
  context.commandClasses.reduce(
    (acc, { id: commandClassId, values }) => {
      const options = [] as Option[];

      values.forEach(value => {
        if ((skipReadOnly && value.isReadOnly) || (skipWriteOnly && value.isWriteOnly)) {
          return;
        }

        const key = getValueKey(commandClassId, value);

        const optionLabel = localization()
          .commandClasses.find(({ id }) => id === commandClassId)
          ?.values?.find(({ id }) => id === value.id)?.label;

        options.push({
          id: key,
          text: optionLabel ? `${optionLabel} [${value.instanceId}]` : key,
        });
      });

      const optgroupLabel =
        localization().commandClasses.find(({ id }) => id === commandClassId)?.label ||
        `CommandClass ${commandClassId}`;

      if (options.length) {
        acc.push({
          text: optgroupLabel,
          children: options,
        });
      }

      return acc;
    },
    [...(addEmpty ? [{ id: '', text: SELECT_VALUE }] : [])] as DropdownOptions
  );
