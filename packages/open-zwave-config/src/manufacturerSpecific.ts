import { memoize } from 'lodash';

import { ManufacturerSpecificConfig } from './generated';

export const manufacturerSpecific = memoize(() => {
  if (!ManufacturerSpecificConfig?.ManufacturerSpecificData?.Manufacturer) {
    throw new Error('Wrong ManufacturerSpecific config');
  }
  return ManufacturerSpecificConfig.ManufacturerSpecificData.Manufacturer.map(({ Product, ...rest }) => ({
    product: Product || [],
    ...rest,
  }));
});
