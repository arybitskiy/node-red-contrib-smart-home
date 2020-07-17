import * as NodeRed from 'node-red';

interface CommonUiBackend extends NodeRed.Node {}

interface CommonUiBackendProps extends NodeRed.NodeProperties {}

export default (RED: NodeRed.Red) => {
  function CommonUiConstructor(this: CommonUiBackend, props: CommonUiBackendProps) {
    RED.nodes.createNode(this, props);

    this.on('input', (msg, send, done) => {
      send(msg);
      done();
    });
  }

  RED.nodes.registerType('common-ui', CommonUiConstructor);
};
