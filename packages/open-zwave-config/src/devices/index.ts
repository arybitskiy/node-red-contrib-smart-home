import { memoize, mapValues } from 'lodash';

import { SELECT_DEVICE } from '@sh/text-constants';

import deviceConfig from '../generated/config/devices';
import { manufacturerSpecific } from '../manufacturerSpecific';
import type { ManufacturerSpecific } from '../manufacturerSpecific';
import { deviceMapper } from './deviceMapper';
import type { DeviceMapper } from './deviceMapper';
import { getDeviceName } from './utils';

const deviceInfo = manufacturerSpecific();

interface Device extends ManufacturerSpecific, DeviceMapper {
  key: string;
}

export const devices = memoize(() =>
  mapValues(deviceConfig, devices =>
    mapValues(devices, (device, key) => {
      if (!(key in deviceInfo)) {
        throw new Error('Wrong Device or Manufacturer config');
      }

      return {
        key,
        ...deviceInfo[key],
        ...deviceMapper(device),
      };
    })
  )
);

export const getDevicesList = memoize(() =>
  Object.values(devices()).reduce((acc, devicesObject) => {
    mapValues(devicesObject, (device, key) => {
      acc[key] = device;
    });

    return acc;
  }, [] as Device[])
);

export const getDevicesObject = memoize(
  () =>
    getDevicesList().reduce((acc, device) => {
      acc[device.key] = device;

      return acc;
    }, {}) as { [key: string]: Device }
);

export const devicesDropdownOptions = memoize((addEmpty = false) => [
  ...(addEmpty ? [{ id: '', text: SELECT_DEVICE }] : []),
  ...getDevicesList().map(device => ({
    id: device.key,
    text: getDeviceName(device),
  })),
]);

export const getDeviceNameById = (deviceId: string) => {
  const device = getDevicesObject()[deviceId];
  if (!device) {
    throw new Error(`Unknown device ${deviceId}`);
  }
  return getDeviceName(device);
};
