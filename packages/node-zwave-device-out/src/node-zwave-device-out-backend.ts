import * as NodeRed from 'node-red';

import type { NodeZwaveDeviceOutBackend, NodeZwaveDeviceOutBackendProps } from './types';

export default (RED: NodeRed.Red) => {
  function NodeZwaveDeviceOutConstructor(this: NodeZwaveDeviceOutBackend, props: NodeZwaveDeviceOutBackendProps) {
    RED.nodes.createNode(this, props);

    const { device, values } = props;

    this.device = RED.nodes.getNode(device) as any;

    const valueChangeListener = msg => {
      if (msg.hasChanged) {
        this.send(msg);
      }
    };

    values.forEach(valueEvent => {
      this.device?.on(valueEvent, valueChangeListener);
    });

    this.on('close', () => {
      values.forEach(valueEvent => {
        this.device?.off(valueEvent, valueChangeListener);
      });
    });
  }

  RED.nodes.registerType('node-zwave-device-out', NodeZwaveDeviceOutConstructor);
};
