import * as NodeRed from 'node-red';

import type { ConfigNodeLocationBackend, ConfigNodeLocationBackendProps } from './types';
import api from './api';

export default (RED: NodeRed.Red) => {
  function ConfigNodeLocationConstructor(this: ConfigNodeLocationBackend, props: ConfigNodeLocationBackendProps) {
    RED.nodes.createNode(this, props);

    const { name } = props;

    this.getLabel = () => name;

    this.on('input', (msg, send, done) => {
      send(msg);
      done();
    });
  }

  api(RED);

  RED.nodes.registerType('config-node-location', ConfigNodeLocationConstructor);
};
