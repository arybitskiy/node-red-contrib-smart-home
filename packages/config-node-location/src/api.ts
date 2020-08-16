import * as NodeRed from 'node-red';

import { READ_ALL_LOCATIONS, NODE_TYPE } from './constants';
import type { ConfigNodeLocationBackend, ReadAllLocationsResponse } from './types';

export default (RED: NodeRed.Red) => {
  RED.httpAdmin.get(`/${READ_ALL_LOCATIONS}`, RED.auth.needsPermission(READ_ALL_LOCATIONS), function (req, res) {
    const nodes: ReadAllLocationsResponse = [];
    RED.nodes.eachNode(nodeObject => {
      if (nodeObject.type === NODE_TYPE) {
        const node = RED.nodes.getNode(nodeObject.id) as ConfigNodeLocationBackend | null;
        if (node) {
          nodes.push({ id: node.id, label: node.getLabel() });
        }
      }
    });
    res.json(nodes);
  });
};
