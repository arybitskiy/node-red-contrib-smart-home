import React from 'react';
import ReactDOM from 'react-dom';

import { devicesDropdownOptions, getDeviceNameById } from '@sh/open-zwave-config';
import { SELECT_DEVICE } from '@sh/text-constants';
import type { ConfigNodeLocationFrontendProps } from '@sh/config-node-location';

import { ConfigNodeZwavePickDeviceFrontendProps } from './types';

import { App } from './frontend/App';

RED.nodes.registerType<ConfigNodeZwavePickDeviceFrontendProps>('config-node-zwave-pick-device', {
  category: 'config',
  defaults: {
    name: { value: '' },
    node_id: { value: '', required: true },
    device: { value: '', required: true },
    location: { value: '', required: true, type: 'config-node-location' },
  },
  label: function () {
    const location = RED.nodes.node<ConfigNodeLocationFrontendProps>(this.location);

    return (
      this.name ||
      `${this.node_id ? `${this.node_id}: ` : ''}${location ? `${location.label()}: ` : ''}${
        this.device ? getDeviceNameById(this.device) : SELECT_DEVICE
      }`
    );
  },
  oneditprepare: function () {
    const $inputDevice = $('#node-config-input-device')
      .select2({ theme: 'dark-adminlte', data: devicesDropdownOptions(true) })
      .val(this.device)
      .change(() => {
        ReactDOM.render(<App device={$inputDevice.val() as any} />, ROOT_NODE);
      });

    $('#node-config-input-location').select2({ theme: 'dark-adminlte' }).val(this.location);

    const ROOT_NODE = document.getElementById('config-react-app');
    ReactDOM.render(<App device={$inputDevice.val() as any} />, ROOT_NODE);
  },
});
