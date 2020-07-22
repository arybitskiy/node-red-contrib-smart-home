import type { NodeContextValue } from '@sh/config-node-zwave-pick-device';
import { getValueOptionFromLocalization, getValueOptionFromManufacturerSpecific } from '@sh/open-zwave-config';

import type { OpenZWaveValueChangedPayload } from './types';

export const convertValueForContext = (
  device: string,
  {
    class_id,
    index,
    instance,
    value,
    type,
    genre,
    units,
    help,
    read_only,
    write_only,
    min,
    max,
    is_polled,
    values,
  }: OpenZWaveValueChangedPayload['data'][2]
): NodeContextValue => ({
  id: index,
  instanceId: instance,
  value,
  type,
  genre,
  units,
  help,
  isReadOnly: read_only,
  isWriteOnly: write_only,
  min,
  max,
  isPolled: is_polled,
  options: values?.map((option, idx) => {
    const opt =
      getValueOptionFromLocalization(class_id, index, idx, option) ||
      getValueOptionFromManufacturerSpecific(device, class_id, index, idx, option);

    if (!opt) {
      throw new Error('Unknown option found');
    }

    return opt;
  }),
});
