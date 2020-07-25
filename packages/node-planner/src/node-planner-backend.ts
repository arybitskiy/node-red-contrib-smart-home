import * as NodeRed from 'node-red';

import type { NodePlannerBackend, NodePlannerBackendProps } from './types';

export default (RED: NodeRed.Red) => {
  function NodePlannerConstructor(this: NodePlannerBackend, props: NodePlannerBackendProps) {
    RED.nodes.createNode(this, props);

    this.on('input', (msg, send, done) => {
      send(msg);
      done();
    });
  }

  RED.httpNode.get('/test', (req, res) => {
    res.json('test');
  });

  RED.nodes.registerType('node-planner', NodePlannerConstructor);
};
