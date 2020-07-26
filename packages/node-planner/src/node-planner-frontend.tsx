import React from 'react';
import ReactDOM from 'react-dom';

import { Planner } from './frontend/Planner';

import { NodePlannerFrontendProps } from './types';

RED.nodes.registerType<NodePlannerFrontendProps>('node-planner', {
  category: 'category',
  color: '#E9967A',
  defaults: {
    name: { value: '' },
    url: { value: 'planner' },
    planner: { value: '' },
  },
  inputs: 1,
  outputs: 1,
  icon: 'icon',
  label: function () {
    return this.name;
  },
  oneditprepare: function () {
    const ROOT_NODE = document.getElementById('planner-react-app');
    ReactDOM.render(<Planner />, ROOT_NODE);
  },
});
