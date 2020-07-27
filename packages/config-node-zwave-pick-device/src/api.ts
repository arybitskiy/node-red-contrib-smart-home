import * as NodeRed from 'node-red';

import { READ_CONTEXT_ENDPOINT, READ_ALL_NODES, NODE_TYPE } from './constants';
import type { ConfigNodeZwavePickDeviceBackend, ReadAllNodesResponse } from './types';
import { readNodeContext } from './utils';

export default (RED: NodeRed.Red) => {
  RED.httpAdmin.get(`/${READ_CONTEXT_ENDPOINT}`, RED.auth.needsPermission(READ_CONTEXT_ENDPOINT), async function (
    req,
    res
  ) {
    const nodeId = req.query.node_id;
    const node = RED.nodes.getNode(nodeId) as ConfigNodeZwavePickDeviceBackend | null;

    if (!node) {
      res.sendStatus(404);
      return;
    }

    const context = await readNodeContext(node);
    res.json(context);
  });

  RED.httpAdmin.get(`/${READ_ALL_NODES}`, RED.auth.needsPermission(READ_ALL_NODES), function (req, res) {
    const nodes: ReadAllNodesResponse = [];
    RED.nodes.eachNode(nodeObject => {
      if (nodeObject.type === NODE_TYPE) {
        const node = RED.nodes.getNode(nodeObject.id) as ConfigNodeZwavePickDeviceBackend | null;
        console.log('node: ', node);
        if (node) {
          nodes.push({ id: node.id, label: node.getLabel() });
        }
      }
    });
    res.json(nodes);
  });
};
