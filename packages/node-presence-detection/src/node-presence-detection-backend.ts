import { EventEmitter } from 'events';
import * as NodeRed from 'node-red';

import type { NodePresenceDetectionBackend, NodePresenceDetectionBackendProps } from './types';
import { listenNodeChanges, basicProbabilityAnalyzer } from './utils';
import { ZONE_PROBABILITY } from './constants';

export default (RED: NodeRed.Red) => {
  function NodePresenceDetectionConstructor(
    this: NodePresenceDetectionBackend,
    props: NodePresenceDetectionBackendProps
  ) {
    RED.nodes.createNode(this, props);

    const graph = JSON.parse(props.graph);
    const eventEmitter = new EventEmitter();
    const probabilitiesEmitter = new EventEmitter();

    const stopListenPromise = listenNodeChanges(RED, graph, eventEmitter);

    const stopProbabilitiesListen = basicProbabilityAnalyzer(eventEmitter, probabilitiesEmitter);

    const listenProbabilityChanges = payload => {
      this.send({ topic: ZONE_PROBABILITY, payload });
    };

    probabilitiesEmitter.on(ZONE_PROBABILITY, listenProbabilityChanges);

    this.on('input', (msg, send, done) => {
      send(msg);
      done();
    });

    this.on('close', () => {
      stopListenPromise.then(cb => cb()).catch(console.error);
      stopProbabilitiesListen();
      probabilitiesEmitter.off(ZONE_PROBABILITY, listenProbabilityChanges);
    });
  }

  RED.nodes.registerType('node-presence-detection', NodePresenceDetectionConstructor);
};
