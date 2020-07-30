import * as NodeRed from 'node-red';
import express from 'express';
import path from 'path';
import fs from 'fs';

import { getNodesKeyValuesFromRED } from '@sh/config-node-zwave-pick-device';

import type { NodePlannerBackend, NodePlannerBackendProps } from './types';

const buildPath = process.env.npm_package_node_red_nodes_node_planner
  ? path.resolve(
      path.dirname(path.resolve(process.env.INIT_CWD as string, process.env.npm_package_node_red_nodes_node_planner)),
      'ui'
    )
  : path.resolve('node_modules/node-red-contrib-smart-home/packages/node-planner/build/ui');

export default (RED: NodeRed.Red) => {
  function NodePlannerConstructor(this: NodePlannerBackend, props: NodePlannerBackendProps) {
    RED.nodes.createNode(this, props);

    const { url, planner } = props;

    console.log(`Listening to /${url}`);
    RED.httpNode.get(`/${url}`, async (req, res) => {
      const html = fs.readFileSync(path.resolve(buildPath, 'index.html')).toString();

      const cache = { planner: JSON.parse(planner), nodes: await getNodesKeyValuesFromRED(RED) };
      const injectedHtml = html.replace('%%json_cache%%', JSON.stringify(cache));
      res.send(injectedHtml);
    });

    console.log(`Serving static from ${buildPath}`);
    RED.httpNode.use(`/${url}`, express.static(buildPath));

    this.on('input', (msg, send, done) => {
      send(msg);
      done();
    });
  }

  RED.nodes.registerType('node-planner', NodePlannerConstructor);
};
