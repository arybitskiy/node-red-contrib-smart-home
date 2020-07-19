import { memoize } from 'lodash';

import { hex2dec, parseCommandClasses } from '../utils';
import { DeviceClassesConfig } from '../generated';

export const deviceType = memoize(() => {
  if (!DeviceClassesConfig?.DeviceClasses?.DeviceType) {
    throw new Error('Wrong Role config');
  }
  return DeviceClassesConfig.DeviceClasses.DeviceType.map(({ key, command_classes, ...restGeneric }) => ({
    key: hex2dec(key),
    commandClasses: parseCommandClasses(command_classes),
    ...restGeneric,
  }));
});
