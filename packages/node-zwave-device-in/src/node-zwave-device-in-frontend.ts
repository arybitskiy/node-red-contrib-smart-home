import type { ConfigNodeZwavePickDeviceFrontendProps } from '@sh/config-node-zwave-pick-device';

interface NodeZwaveDeviceInConfig {
  name: string;
  device: string;
}

RED.nodes.registerType<NodeZwaveDeviceInConfig>('node-zwave-device-in', {
  category: 'category',
  color: '#E9967A',
  defaults: {
    name: { value: '' },
    device: {
      value: '',
      type: 'config-node-zwave-pick-device',
      required: true,
    },
  },
  inputs: 1,
  outputs: 0,
  icon: 'icon',
  label: function () {
    const device = RED.nodes.node<ConfigNodeZwavePickDeviceFrontendProps>(this.device);

    return this.name || (device ? device.label() : 'node-zwave-device-in');
  },
  oneditprepare: function () {
    $('#node-input-device').select2({ theme: 'dark-adminlte' }).val(this.device);
  },
});
