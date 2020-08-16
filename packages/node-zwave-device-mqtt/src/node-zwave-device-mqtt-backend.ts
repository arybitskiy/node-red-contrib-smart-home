import * as NodeRed from 'node-red';

import { parsePayloadAsJSON, detectOpenZWaveEvent, OpenZWaveEventType } from '@sh/common-utils';
import { VALUES_SET_EVENT, MQTT_DISCOVERY } from '@sh/config-node-zwave-pick-device';

import type {
  NodeZwaveDeviceInMqttBackend,
  NodeZwaveDeviceInMqttBackendProps,
  OpenZWaveValueChangedPayload,
} from './types';
import { convertValueForContext } from './utils';

export default (RED: NodeRed.Red) => {
  function NodeZwaveDeviceInMqttConstructor(
    this: NodeZwaveDeviceInMqttBackend,
    props: NodeZwaveDeviceInMqttBackendProps
  ) {
    RED.nodes.createNode(this, props);
    const { device } = props;

    this.device = RED.nodes.getNode(device) as any;

    const valueChangeListener = msg => {
      this.send(msg);
    };

    // console.log(`Subscribed to ${VALUES_SET_EVENT} on ${this.device?.id}`);
    this.device?.on(VALUES_SET_EVENT, valueChangeListener);
    this.device?.on(MQTT_DISCOVERY, valueChangeListener);

    this.on('close', () => {
      this.device?.off(VALUES_SET_EVENT, valueChangeListener);
      this.device?.off(MQTT_DISCOVERY, valueChangeListener);
    });

    this.on('input', (msg, _, done) => {
      if (this.device && this.device.haSetStateTopics && this.device.haSetStateTopics.includes(msg.topic)) {
        this.device.setState(msg.topic, msg.payload).catch(console.error);
      } else {
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
      }
    });
  }

  RED.nodes.registerType('node-zwave-device-mqtt', NodeZwaveDeviceInMqttConstructor);
};
