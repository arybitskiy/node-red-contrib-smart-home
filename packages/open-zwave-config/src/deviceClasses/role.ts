import { memoize } from 'lodash';

import { hex2dec, parseCommandClasses } from '../utils';
import { DeviceClassesConfig } from '../generated';

export const role = memoize(() => {
  if (!DeviceClassesConfig?.DeviceClasses?.Role) {
    throw new Error('Wrong Role config');
  }
  return DeviceClassesConfig.DeviceClasses.Role.map(({ key, basic, command_classes, ...restGeneric }) => ({
    key: hex2dec(key),
    commandClasses: parseCommandClasses(command_classes),
    ...restGeneric,
  }));
});
