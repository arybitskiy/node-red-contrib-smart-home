import { NodeContext } from '@sh/config-node-zwave-pick-device';
import { getValueKey } from '@sh/config-node-zwave-pick-device';
import type { NodeContextValueType } from '@sh/config-node-zwave-pick-device';

enum FieldType {
  text = 'text',
  number = 'number',
  date = 'date',
  time = 'time',
  datetime = 'datetime',
  select = 'select',
  multiselect = 'multiselect',
  treeselect = 'treeselect',
  treemultiselect = 'treemultiselect',
  boolean = 'boolean',
}

interface ListValue {
  value: string;
  title: string;
}

interface FieldSettings {
  min?: number;
  max?: number;
  step?: number;
  marks?: any;
  timeFormat?: string;
  dateFormat?: string;
  valueFormat?: string;
  use12Hours?: boolean;
  listValues?: ListValue[];
  validateValue?: any;
  allowCustomValues?: boolean;
  treeExpandAll?: boolean;
  treeSelectOnlyLeafs?: boolean;
}

interface Field {
  type: FieldType;
  subfields?: { [key: string]: Field };
  label: string;
  label2?: string;
  tooltip?: string;
  fieldSettings?: FieldSettings;
  defaultValue?: string;
  preferWidgets?: any;
  operators?: any;
  defaultOperator?: any;
  widgets?: any;
  valueSources?: any;
  mainWidgetProps?: any;
  excludeOperators?: any;
  funcs?: any;
  hideForSelect?: boolean;
  hideForCompare?: boolean;
}

interface Fields {
  [key: string]: Field;
}

export const convertNodeContextToQueryBuilderFields = (context: NodeContext) =>
  context.commandClasses.reduce((acc, commandClass) => {
    commandClass.values.forEach(value => {
      if (value.isWriteOnly) {
        return;
      }
      const key = getValueKey(commandClass.id, value);

      const general = {
        label: value.help || key,
      };

      switch (value.type) {
        case 'string':
          acc[key] = {
            ...general,
            type: FieldType.text,
          };
          break;
        case 'int':
        case 'byte':
        case 'short':
          acc[key] = {
            ...general,
            type: FieldType.number,
            fieldSettings: {
              min: value.min,
              max: value.max,
            },
          };
          break;
        case 'list':
          acc[key] = {
            ...general,
            type: FieldType.select,
            valueSources: ['value'],
            fieldSettings: {
              listValues: (value.options || []).map(option => ({ value: option.value, title: option.value })),
            },
          };
          break;
        case 'bool':
          acc[key] = {
            ...general,
            type: FieldType.boolean,
          };
          break;
        default:
          console.warn(`Unhandled type ${value.type}`);
          break;
      }
    });

    return acc;
  }, {} as Fields);
