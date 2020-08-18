import * as NodeRed from 'node-red';

import type { ConfigNodeLocationBackend } from '@sh/config-node-location';
import { ZONE_PROBABILITY } from '@sh/node-presence-detection';

import type { ConfigNodeZwavePickDeviceBackend } from '../../types';
import {
  COMMAND_CLASS_ID,
  FIRST_INSTANCE_ID,
  SECOND_INSTANCE_ID,
  VALUE_ID,
  FIRST_INSTANCE_MANUAL_MODE,
  SECOND_INSTANCE_MANUAL_MODE,
} from './constants';
import { FibaroWalliDoubleSwitchDiscovery } from './FibaroWalliDoubleSwitchDiscovery';

export const FibaroWalliDoubleSwitch = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red) => {
  const stopDiscovery = FibaroWalliDoubleSwitchDiscovery(node, RED);

  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;

  const turnSwitch = async (instanceId: number, value: boolean) => {
    await node.sendValue(COMMAND_CLASS_ID, instanceId, VALUE_ID, value);
  };

  const handleZoneProbabilityChange = async ({ probability, value }) => {
    const firstInstanceManualMode = node.configuration.manual_mode && (await node.getKey(FIRST_INSTANCE_MANUAL_MODE));
    const secondInstanceManualMode = node.configuration.manual_mode && (await node.getKey(SECOND_INSTANCE_MANUAL_MODE));
    const turnOn = probability > 0.5 && value;

    if (!firstInstanceManualMode) {
      await turnSwitch(FIRST_INSTANCE_ID, turnOn);
    }
    if (!secondInstanceManualMode) {
      await turnSwitch(SECOND_INSTANCE_ID, turnOn);
    }
  };

  locationNode && locationNode.on(ZONE_PROBABILITY, handleZoneProbabilityChange);

  return () => {
    stopDiscovery();
    locationNode && locationNode.off(ZONE_PROBABILITY, handleZoneProbabilityChange);
  };
};
