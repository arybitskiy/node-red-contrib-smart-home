import type { ConfigNodeZwavePickDeviceFrontendProps } from '@sh/config-node-zwave-pick-device';
import { READ_CONTEXT_ENDPOINT } from '@sh/config-node-zwave-pick-device';
import { SELECT_VALUE } from '@sh/text-constants';
import { getDeviceOptions } from '@sh/open-zwave-config';

import type { NodeZwaveDeviceOutFrontendProps } from './types';

const emptyData = [];

const valueSelectConfig = {
  theme: 'dark-adminlte',
  multiple: true,
  placeholder: SELECT_VALUE,
  width: '100%',
  closeOnSelect: false,
};

// Dirty hack
const restartSelect = (select: any, data: any) => {
  select
    .select2('destroy')
    .html('')
    .select2({
      data,
      ...valueSelectConfig,
    });
};

RED.nodes.registerType<NodeZwaveDeviceOutFrontendProps>('node-zwave-device-out', {
  category: 'category',
  color: '#E9967A',
  defaults: {
    name: {
      value: '',
    },
    device: {
      value: '',
      type: 'config-node-zwave-pick-device',
      required: true,
    },
    values: {
      value: [],
    },
  },
  inputs: 0,
  outputs: 1,
  icon: 'icon',
  label: function () {
    const device = RED.nodes.node<ConfigNodeZwavePickDeviceFrontendProps>(this.device);

    return this.name || (device ? device.label() : 'node-zwave-device-out');
  },
  oneditprepare: function () {
    const valueInput = $('#node-input-values').select2({
      data: emptyData,
      ...valueSelectConfig,
    });

    const deviceInput = $('#node-input-device')
      .select2({ theme: 'dark-adminlte' })
      .val(this.device)
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      .on('change', async () => {
        const device = deviceInput.val();

        restartSelect(valueInput, emptyData);
        if (typeof device === 'string' && new RegExp('^[a-z0-9]+\\.[a-z0-9]+$').exec(device)) {
          const data = await $.getJSON(READ_CONTEXT_ENDPOINT, { node_id: this.device || device });
          restartSelect(valueInput, getDeviceOptions(data, { skipWriteOnly: true }));
          valueInput.val(this.values).trigger('change');
        }
      });
  },
});
