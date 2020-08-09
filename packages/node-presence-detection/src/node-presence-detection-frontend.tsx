import React from 'react';
import ReactDOM from 'react-dom';

import { StoreProvider } from '@sh/node-planner';

import { NodePresenceDetectionFrontendProps } from './types';

import { App } from './frontend/App';

RED.nodes.registerType<NodePresenceDetectionFrontendProps>('node-presence-detection', {
  category: 'category',
  color: '#E9967A',
  defaults: {
    name: { value: '' },
    graph: { value: '' },
  },
  inputs: 1,
  outputs: 1,
  icon: 'icon',
  label: function () {
    return this.name;
  },
  oneditprepare: function () {
    const ROOT_NODE = document.getElementById('graph-react-app');
    ReactDOM.render(
      <StoreProvider>
        <App />
      </StoreProvider>,
      ROOT_NODE
    );
  },
});
