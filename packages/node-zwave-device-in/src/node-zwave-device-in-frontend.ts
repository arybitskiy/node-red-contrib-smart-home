import { devicesDropdownOptions, getDeviceNameById } from '@sh/open-zwave-config';
import { SELECT_DEVICE } from '@sh/text-constants';

RED.nodes.registerType('node-zwave-device-in', {
  category: 'category',
  color: '#E9967A',
  defaults: {
    name: { value: '' },
    device: { value: '' },
  },
  inputs: 1,
  outputs: 1,
  icon: 'icon',
  label: function () {
    return this.name || (this.device ? getDeviceNameById(this.device) : SELECT_DEVICE);
  },
  oneditprepare: function () {
    console.log(this.device);
    $('#node-input-device')
      .select2({ theme: 'dark-adminlte', data: devicesDropdownOptions(true) })
      .val(this.device);
  },
});
