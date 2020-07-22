import { SELECT2_EMPTY_DATA, SELECT2_DEFAULT_CONFIG } from '@sh/constants';
import type { ConfigNodeZwavePickDeviceFrontendProps } from '@sh/config-node-zwave-pick-device';
import { READ_CONTEXT_ENDPOINT } from '@sh/config-node-zwave-pick-device';
import { getDeviceOptions } from '@sh/open-zwave-config';

import { NodeZwaveDeviceInFrontendProps } from './types';

// Dirty hack
const restartSelect = (select: any, data: any) => {
  select
    .select2('destroy')
    .html('')
    .select2({
      data,
      ...SELECT2_DEFAULT_CONFIG,
    });
};

RED.nodes.registerType<NodeZwaveDeviceInFrontendProps>('node-zwave-device-in', {
  category: 'category',
  color: '#E9967A',
  defaults: {
    name: { value: '' },
    device: {
      value: '',
      type: 'config-node-zwave-pick-device',
      required: true,
    },
    value: {
      value: '',
    },
  },
  inputs: 1,
  outputs: 0,
  icon: 'icon',
  label: function () {
    const device = RED.nodes.node<ConfigNodeZwavePickDeviceFrontendProps>(this.device);

    return this.name || (device ? device.label() : 'node-zwave-device-out');
  },
  oneditprepare: function () {
    const valueInput = $('#node-input-value').select2({
      data: SELECT2_EMPTY_DATA,
      ...SELECT2_DEFAULT_CONFIG,
    });

    const deviceInput = $('#node-input-device')
      .select2({ theme: 'dark-adminlte' })
      .val(this.device)
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      .on('change', async () => {
        const device = deviceInput.val();

        restartSelect(valueInput, SELECT2_EMPTY_DATA);
        if (typeof device === 'string' && new RegExp('^[a-z0-9]+\\.[a-z0-9]+$').exec(device)) {
          const data = await $.getJSON(READ_CONTEXT_ENDPOINT, { node_id: this.device || device });
          restartSelect(valueInput, getDeviceOptions(data, { skipReadOnly: true }));
          valueInput.val(this.value).trigger('change');
        }
      });
  },
});
