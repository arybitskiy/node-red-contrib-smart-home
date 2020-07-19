import * as NodeRed from 'node-red';

interface ZWaveDeviceInBackend extends NodeRed.Node {}

interface ZWaveDeviceInBackendProps extends NodeRed.NodeProperties {}

export default (RED: NodeRed.Red) => {
  function ZWaveDeviceInConstructor(this: ZWaveDeviceInBackend, props: ZWaveDeviceInBackendProps) {
    RED.nodes.createNode(this, props);

    this.on('input', (msg, send, done) => {
      send(msg);
      done();
    });
  }

  RED.nodes.registerType('z-wave-device-in', ZWaveDeviceInConstructor);
};
