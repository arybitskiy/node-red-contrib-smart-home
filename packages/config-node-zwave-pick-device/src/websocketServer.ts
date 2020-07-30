import * as NodeRed from 'node-red';
import { Server as WebSocketServer } from 'ws';
import { EventEmitter } from 'events';
import url from 'url';

import { WEBSOCKET_PATH, WEBSOCKET_MESSAGE_EVENT } from './constants';
import { getNodesKeyValuesFromRED } from './utils';
import { WebSocketMessageType } from './types';

export default (RED: NodeRed.Red) => {
  const crossNodeCoordination = new EventEmitter();

  const wsServer = new WebSocketServer({
    noServer: true,
  });

  wsServer.on('connection', function connection(ws) {
    const handleMessageToWebsocket = (message: any) => {
      ws.send(JSON.stringify(message));
    };

    getNodesKeyValuesFromRED(RED)
      .then(nodesKeyValues => {
        handleMessageToWebsocket({
          type: WebSocketMessageType.ALL_VALUES,
          nodes: nodesKeyValues,
        });
      })
      .catch(console.error);

    crossNodeCoordination.on(WEBSOCKET_MESSAGE_EVENT, handleMessageToWebsocket);

    ws.on('message', function incoming(message) {
      console.log('received: %s', message);
    });

    ws.on('close', function (...args) {
      console.log('args: ', args);
      crossNodeCoordination.off(WEBSOCKET_MESSAGE_EVENT, handleMessageToWebsocket);
    });
  });

  RED.server.on('upgrade', function upgrade(request, socket, head) {
    const pathname = url.parse(request.url).pathname;

    if (pathname?.endsWith(WEBSOCKET_PATH)) {
      console.log('New WebSocket Connection: ', WEBSOCKET_PATH);
      wsServer.handleUpgrade(request, socket, head, ws => {
        wsServer.emit('connection', ws, request);
      });
    }
  });

  return crossNodeCoordination;
};
