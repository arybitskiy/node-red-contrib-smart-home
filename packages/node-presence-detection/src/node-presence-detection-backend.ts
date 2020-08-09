import * as NodeRed from 'node-red';

import type { NodePresenceDetectionBackend, NodePresenceDetectionBackendProps } from './types';

export default (RED: NodeRed.Red) => {
  function NodePresenceDetectionConstructor(this: NodePresenceDetectionBackend, props: NodePresenceDetectionBackendProps) {
    RED.nodes.createNode(this, props);

    this.on('input', (msg, send, done) => {
      send(msg);
      done();
    });
  }

  RED.nodes.registerType('node-presence-detection', NodePresenceDetectionConstructor);
};
