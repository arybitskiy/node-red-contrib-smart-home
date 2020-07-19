import { memoize } from 'lodash';

import { hex2dec } from '../utils/hex2dec';
import { DeviceClassesConfig } from '../generated';

export const basic = memoize(() => {
  if (!DeviceClassesConfig?.DeviceClasses?.Basic) {
    throw new Error('Wrong Base config');
  }
  return DeviceClassesConfig.DeviceClasses.Basic.map(({ key, ...rest }) => ({
    key: hex2dec(key),
    ...rest,
  }));
});
