import * as NodeRed from 'node-red';

import { parsePayloadAsJSON, detectOpenZWaveEvent, OpenZWaveEventType } from '@sh/common-utils';

import type { NodeZwaveDeviceInBackend, NodeZwaveDeviceInBackendProps, OpenZWaveValueChangedPayload } from './types';
import { convertValueForContext } from './utils';

export default (RED: NodeRed.Red) => {
  function NodeZwaveDeviceInConstructor(this: NodeZwaveDeviceInBackend, props: NodeZwaveDeviceInBackendProps) {
    RED.nodes.createNode(this, props);
    const { device } = props;

    this.device = RED.nodes.getNode(device) as any;

    this.on('input', (msg, _, done) => {
      const zWaveEventType = detectOpenZWaveEvent(msg.topic);
      if (zWaveEventType === OpenZWaveEventType.VALUE_CHANGED || zWaveEventType === OpenZWaveEventType.VALUE_ADDED) {
        const {
          data: [, , value],
        } = parsePayloadAsJSON<OpenZWaveValueChangedPayload>(msg.payload);

        if (this.device && this.device.getNodeId() === value.node_id) {
          this.device
            .setValue(value.class_id, convertValueForContext(this.device.device, value))
            .then(done)
            .catch((e: Error) => {
              this.error(e.toString());
            });
        }
      }
    });
  }

  RED.nodes.registerType('node-zwave-device-in', NodeZwaveDeviceInConstructor);
};
