import { ConfigNodeLocationFrontendProps } from './types';

RED.nodes.registerType<ConfigNodeLocationFrontendProps>('config-node-location', {
  category: 'config',
  defaults: {
    name: { value: '', required: true },
    tags: { value: '' },
  },
  label: function () {
    return this.name;
  },
});
