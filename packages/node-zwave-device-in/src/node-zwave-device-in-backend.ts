import * as NodeRed from 'node-red';

interface NodeZwaveDeviceInBackend extends NodeRed.Node {}

interface NodeZwaveDeviceInBackendProps extends NodeRed.NodeProperties {}

export default (RED: NodeRed.Red) => {
  function NodeZwaveDeviceInConstructor(this: NodeZwaveDeviceInBackend, props: NodeZwaveDeviceInBackendProps) {
    RED.nodes.createNode(this, props);

    this.on('input', (msg, send, done) => {
      send(msg);
      done();
    });
  }

  RED.nodes.registerType('node-zwave-device-in', NodeZwaveDeviceInConstructor);
};
