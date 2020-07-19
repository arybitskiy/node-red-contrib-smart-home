import { memoize, mapValues, map } from 'lodash';

import deviceConfig from '../generated/config/devices';
import { manufacturerSpecific } from '../manufacturerSpecific';
import { deviceMapper } from './deviceMapper';

const deviceInfo = manufacturerSpecific();

export const devices = memoize(() =>
  mapValues(deviceConfig, devices =>
    mapValues(devices, (device, key) => {
      if (!(key in deviceInfo)) {
        throw new Error('Wrong Device or Manufacturer config');
      }

      return {
        ...deviceInfo[key],
        ...deviceMapper(device),
      };
    })
  )
);
