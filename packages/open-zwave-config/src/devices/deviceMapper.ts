import type { document as deviceConfig } from '../generated/github.com/OpenZWave/device_configuration';
import type { DeviceValueGenre, DeviceValueSize } from '../types';

export const deviceMapper = (device: Partial<deviceConfig>) => {
  if (!device?.Product) {
    throw new Error('Wrong Device config');
  }

  const { CommandClass } = device.Product;

  return {
    commandClasses: (CommandClass || []).map(({ id, Value }) => ({
      id: parseInt(id, 10),
      values: (Value || []).map(
        ({
          genre,
          index,
          instance,
          min,
          max,
          read_only,
          size,
          value,
          verify_changes,
          vindex,
          write_only,
          BitSet,
          Help,
          Item,
          Label,
          ...rest
        }) => ({
          genre: genre as DeviceValueGenre,
          index: parseInt(index, 10),
          instance: parseInt(instance || '0', 10),
          min: typeof min === 'undefined' ? min : parseInt(min, 10),
          max: typeof max === 'undefined' ? max : parseInt(max, 10),
          readOnly: typeof read_only === 'undefined' ? false : read_only === 'true',
          size: typeof size === 'undefined' ? size : (parseInt(size, 10) as DeviceValueSize),
          value: typeof value === 'undefined' ? value : parseInt(value, 10),
          verifyChanges: typeof verify_changes === 'undefined' ? false : verify_changes === 'true',
          vindex: typeof vindex === 'undefined' ? vindex : parseInt(vindex, 10),
          writeOnly: typeof write_only === 'undefined' ? false : write_only === 'true',
          bitSet: BitSet?.map(({ id, Help, Label }) => ({ id: parseInt(id, 10), help: Help, label: Label })),
          help: Help,
          items: Item,
          labels: Label,
          ...rest,
        })
      ),
    })),
  };
};

export type DeviceMapper = ReturnType<typeof deviceMapper>;
