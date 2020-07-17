import * as NodeRed from 'node-red';

interface NodeBackend extends NodeRed.Node {}

interface NodeBackendProps extends NodeRed.NodeProperties {}

export default (RED: NodeRed.Red) => {
  function NodeConstructor(this: NodeBackend, props: NodeBackendProps) {
    RED.nodes.createNode(this, props);

    this.on('input', (msg, send, done) => {
      send(msg);
      done();
    });
  }

  RED.nodes.registerType('node', NodeConstructor);
};
