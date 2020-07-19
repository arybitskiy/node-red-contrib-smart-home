import { memoize } from 'lodash';

import { ManufacturerSpecificConfig } from './generated';
import { hex2dec } from './utils';

const generateObjectKey = (productConfig: string) => {
  const parts = productConfig.split('/');
  parts[1] = parts[1].toUpperCase();
  return parts.join('');
};

export interface ManufacturerSpecific {
  manufacturerId: number;
  manufacturerName: string;
  productId: number;
  productType: number;
  productName: string;
}

interface ManufacturerSpecificObject {
  [key: string]: ManufacturerSpecific;
}

export const manufacturerSpecific = memoize(() => {
  if (!ManufacturerSpecificConfig?.ManufacturerSpecificData?.Manufacturer) {
    throw new Error('Wrong ManufacturerSpecific config');
  }

  return ManufacturerSpecificConfig.ManufacturerSpecificData.Manufacturer.reduce(
    (acc, { id: manufacturerId, name: manufacturerName, Product }) => {
      (Product || []).reduce((_, { id: productId, type: productType, name: productName, config: productConfig }) => {
        if (productConfig) {
          acc[generateObjectKey(productConfig)] = {
            manufacturerId: hex2dec(manufacturerId),
            manufacturerName,
            productId: hex2dec(productId),
            productType: hex2dec(productType),
            productName,
          };
        }

        return acc;
      }, {});
      return acc;
    },
    {} as ManufacturerSpecificObject
  );
});
