import * as NodeRed from 'node-red';

import { NODE_RED_FILE_STORAGE } from '@sh/constants';

import type { ConfigNodeZwavePickDeviceBackend, ConfigNodeZwavePickDeviceBackendProps } from './types';
import { getValueKey } from './utils';

export default (RED: NodeRed.Red) => {
  function ConfigNodeZwavePickDeviceConstructor(
    this: ConfigNodeZwavePickDeviceBackend,
    props: ConfigNodeZwavePickDeviceBackendProps
  ) {
    RED.nodes.createNode(this, props);

    const { name, node_id, device } = props;

    this.name = name;
    this.node_id = parseInt(node_id, 10);
    this.device = device;

    this.setValue = (commandClassId, instanceId, valueId, value) =>
      new Promise((resolve, reject) => {
        this.context().set(
          getValueKey(commandClassId, instanceId, valueId),
          value,
          NODE_RED_FILE_STORAGE,
          (err: Error) => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          }
        );
      });

    this.getValue = (commandClassId, instanceId, valueId) =>
      new Promise(resolve => {
        this.context().get(
          getValueKey(commandClassId, instanceId, valueId),
          NODE_RED_FILE_STORAGE,
          (err: Error, value: number) => {
            if (err) {
              resolve();
            } else {
              resolve(value);
            }
          }
        );
      });

    this.getNodeId = () => this.node_id;
  }

  RED.nodes.registerType('config-node-zwave-pick-device', ConfigNodeZwavePickDeviceConstructor);
};
