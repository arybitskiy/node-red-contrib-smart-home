import { memoize } from 'lodash';

import { hex2dec } from '../utils/hex2dec';
import { DeviceClassesConfig } from '../generated';

export const nodeType = memoize(() => {
  if (!DeviceClassesConfig?.DeviceClasses?.NodeType) {
    throw new Error('Wrong NodeType config');
  }
  return DeviceClassesConfig.DeviceClasses.NodeType.map(({ key, ...rest }) => ({
    key: hex2dec(key),
    ...rest,
  }));
});
