import * as NodeRed from 'node-red';

import type { NodeZwaveDeviceOutBackend, NodeZwaveDeviceOutBackendProps } from './types';

export default (RED: NodeRed.Red) => {
  function NodeZwaveDeviceOutConstructor(this: NodeZwaveDeviceOutBackend, props: NodeZwaveDeviceOutBackendProps) {
    RED.nodes.createNode(this, props);

    this.on('input', (msg, send, done) => {
      send(msg);
      done();
    });
  }

  RED.nodes.registerType('node-zwave-device-out', NodeZwaveDeviceOutConstructor);
};
