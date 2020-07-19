import { memoize } from 'lodash';

import { hex2dec, parseCommandClasses } from '../utils';
import { DeviceClassesConfig } from '../generated';

export const generic = memoize(() => {
  if (!DeviceClassesConfig?.DeviceClasses?.Generic) {
    throw new Error('Wrong Generic config');
  }
  return DeviceClassesConfig.DeviceClasses.Generic.map(({ key, basic, command_classes, Specific, ...restGeneric }) => ({
    key: hex2dec(key),
    basic: typeof basic === 'undefined' ? basic : hex2dec(basic),
    commandClasses: parseCommandClasses(command_classes),
    specific: (typeof Specific === 'undefined' ? [] : Specific).map(
      ({ key, command_classes, basic, ...restSpecific }) => ({
        key: hex2dec(key),
        commandClasses: parseCommandClasses(command_classes),
        basic: typeof basic === 'undefined' ? basic : hex2dec(basic),
        ...restSpecific,
      })
    ),
    ...restGeneric,
  }));
});
