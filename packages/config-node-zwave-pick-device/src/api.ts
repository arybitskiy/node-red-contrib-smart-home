import * as NodeRed from 'node-red';

import { READ_CONTEXT_ENDPOINT } from './constants';
import type { ConfigNodeZwavePickDeviceBackend } from './types';
import { readNodeContext } from './utils';

export default (RED: NodeRed.Red) => {
  RED.httpAdmin.get(
    `/${READ_CONTEXT_ENDPOINT}`,
    RED.auth.needsPermission('config-node-zwave-pick-device-backend.read-command-classes'),
    async function (req, res) {
      const nodeId = req.query.node_id;
      const node = RED.nodes.getNode(nodeId) as ConfigNodeZwavePickDeviceBackend | null;

      if (!node) {
        res.sendStatus(404);
        return;
      }

      const context = await readNodeContext(node);
      res.json(context);
    }
  );
};
