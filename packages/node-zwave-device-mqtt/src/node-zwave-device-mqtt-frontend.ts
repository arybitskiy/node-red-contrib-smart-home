import type { ConfigNodeZwavePickDeviceFrontendProps } from '@sh/config-node-zwave-pick-device';

interface NodeZwaveDeviceInMqttConfig {
  name: string;
  device: string;
}

RED.nodes.registerType<NodeZwaveDeviceInMqttConfig>('node-zwave-device-mqtt', {
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
  outputs: 1,
  icon: 'icon',
  label: function () {
    const device = RED.nodes.node<ConfigNodeZwavePickDeviceFrontendProps>(this.device);

    return this.name || (device ? device.label() : 'node-zwave-device-mqtt');
  },
  oneditprepare: function () {
    $('#node-input-device').select2({ theme: 'dark-adminlte' }).val(this.device);
  },
});
