import * as NodeRed from 'node-red';

import type { ConfigNodeLocationBackend } from '@sh/config-node-location';
import { ZONE_PROBABILITY } from '@sh/node-presence-detection';

import type { ConfigNodeZwavePickDeviceBackend } from '../../types';

export const FibaroWalliDoubleSwitch = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red) => {
  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;
  const turnSwitch = async (instanceId: number, value: boolean) => {
    await node.sendValue(37, instanceId, 0, value);
  };

  console.log('locationNode: ', locationNode);
  console.log('node: ', node);

  const handleZoneProbabilityChange = async ({ probability, value }) => {
    console.log('probability, value: ', probability, value);
    if (probability > 0.5 && value) {
      await turnSwitch(2, true);
      await turnSwitch(3, true);
    } else {
      await turnSwitch(2, false);
      await turnSwitch(3, false);
    }
  };

  locationNode && locationNode.on(ZONE_PROBABILITY, handleZoneProbabilityChange);

  return () => {
    locationNode && locationNode.off(ZONE_PROBABILITY, handleZoneProbabilityChange);
    console.log('end');
  };
};
