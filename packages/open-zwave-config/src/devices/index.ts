import { memoize, mapValues } from 'lodash';

import { SELECT_DEVICE } from '@sh/text-constants';

import deviceConfig from '../generated/config/devices';
import { manufacturerSpecific } from '../manufacturerSpecific';
import type { ManufacturerSpecific } from '../manufacturerSpecific';
import { deviceMapper } from './deviceMapper';
import type { DeviceMapper } from './deviceMapper';
import { getDeviceName } from './utils';
import { OptGroup, DropdownOptions } from '../types';

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
    mapValues(devicesObject, device => {
      acc.push(device);
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

export const getValueOptionFromManufacturerSpecific = (
  device: string,
  commandClassId: number,
  valueId: number,
  index: number,
  optionValue: string
) => {
  // prettier-ignore
  const option = getDevicesObject()[device]
    .commandClasses.find(({ id }) => id === commandClassId)
    ?.values?.find(({ index }) => index === valueId)
    ?.items?.find(({ label }) => label === optionValue);

  if (option) {
    return {
      id: parseInt(option.value, 10),
      index,
      value: option.label,
    };
  }
};

export const devicesDropdownOptions = memoize((addEmpty = false) => [
  ...(addEmpty ? [{ id: '', text: SELECT_DEVICE }] : []),
  ...getDevicesList().reduce((acc, device) => {
    const option = {
      id: device.key,
      text: getDeviceName(device),
    };

    const optgroup = (acc.find(({ text }) => text === device.manufacturerName) || {
      text: device.manufacturerName,
      children: [],
    }) as OptGroup;

    optgroup.children.push(option);

    if (acc.find(({ text }) => text === device.manufacturerName)) {
      acc.map(optgr => {
        if (optgroup.text === optgr.text) {
          return optgroup;
        }

        return optgr;
      });
    } else {
      acc.push(optgroup);
    }

    return acc;
  }, [] as DropdownOptions),
]);

export const getDeviceNameById = (deviceId: string) => {
  const device = getDevicesObject()[deviceId];
  if (!device) {
    throw new Error(`Unknown device ${deviceId}`);
  }
  return getDeviceName(device);
};
