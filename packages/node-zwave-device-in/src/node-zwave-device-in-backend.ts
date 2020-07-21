import * as NodeRed from 'node-red';

import { parsePayloadAsJSON, detectOpenZWaveEvent, OpenZWaveEventType } from '@sh/common-utils';

import type { NodeZwaveDeviceInBackend, NodeZwaveDeviceInBackendProps, OpenZWaveValueChangedPayload } from './types';

export default (RED: NodeRed.Red) => {
  function NodeZwaveDeviceInConstructor(this: NodeZwaveDeviceInBackend, props: NodeZwaveDeviceInBackendProps) {
    RED.nodes.createNode(this, props);
    const { device } = props;

    this.device = RED.nodes.getNode(device) as any;

    this.on('input', (msg, _, done) => {
      const zWaveEventType = detectOpenZWaveEvent(msg.topic);
      if (zWaveEventType === OpenZWaveEventType.VALUE_CHANGED || zWaveEventType === OpenZWaveEventType.VALUE_ADDED) {
        const {
          data: [, , { node_id: nodeId, class_id: commandClassId, instance: instanceId, index: valueId, value }],
        } = parsePayloadAsJSON<OpenZWaveValueChangedPayload>(msg.payload);
        if (this.device && this.device.getNodeId() === nodeId) {
          this.device
            .setValue(commandClassId, instanceId, valueId, value)
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
