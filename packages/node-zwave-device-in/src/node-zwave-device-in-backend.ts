import * as NodeRed from 'node-red';

import { parseValueKey } from '@sh/config-node-zwave-pick-device';

import type { NodeZwaveDeviceInBackend, NodeZwaveDeviceInBackendProps } from './types';

export default (RED: NodeRed.Red) => {
  function NodeZwaveDeviceInConstructor(this: NodeZwaveDeviceInBackend, props: NodeZwaveDeviceInBackendProps) {
    RED.nodes.createNode(this, props);

    const { value, device } = props;
    const { commandClassId, instanceId, valueId } = parseValueKey(value);

    this.device = RED.nodes.getNode(device) as any;

    this.on('input', async ({ payload }, _, done) => {
      if (this.device) {
        await this.device.sendValue(commandClassId, instanceId, valueId, payload);
      }
      done();
    });
  }

  RED.nodes.registerType('node-zwave-device-in', NodeZwaveDeviceInConstructor);
};
