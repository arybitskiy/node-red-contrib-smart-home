import * as NodeRed from 'node-red';

import { devicesDropdownOptions, getDeviceNameById } from '@sh/open-zwave-config';

interface NodeZwaveDeviceInBackend extends NodeRed.Node {}

interface NodeZwaveDeviceInBackendProps extends NodeRed.NodeProperties {
  name: string;
  device: string;
}

export default (RED: NodeRed.Red) => {
  function NodeZwaveDeviceInConstructor(this: NodeZwaveDeviceInBackend, props: NodeZwaveDeviceInBackendProps) {
    RED.nodes.createNode(this, props);
    const { name, device } = props;

    this.on('input', (msg, send, done) => {
      send({
        ...msg,
        payload: getDeviceNameById(device),
      });
      done();
    });
  }

  RED.nodes.registerType('node-zwave-device-in', NodeZwaveDeviceInConstructor);
};
