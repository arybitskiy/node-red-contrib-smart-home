import * as NodeRed from 'node-red';

import type { ConfigNodeLocationBackend } from '@sh/config-node-location';
import { ZONE_PROBABILITY } from '@sh/node-presence-detection';
import { DOMAIN_CONFIG_ZWAVE_DEVICE, INFLUX_LOGGING, NODE_KEY_CHANGED } from '@sh/constants';

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
import { DOMAIN_LIGHT } from '../../mqttDiscovery';

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

    node.emit(INFLUX_LOGGING, {
      topic: INFLUX_LOGGING,
      payload: [
        {
          value: String(turnOn),
        },
        {
          domain: DOMAIN_LIGHT,
          event: 'handle-probability-change',
          node: node.id,
          zwave_node_id: node.getNodeId(),
          command_class_id: COMMAND_CLASS_ID,
          value_id: VALUE_ID,
          timestamp: Date.now(),
          first_instance_manual_mode: String(firstInstanceManualMode),
          second_instance_manual_mode: String(secondInstanceManualMode),
        },
      ],
    });

    if (!firstInstanceManualMode) {
      await turnSwitch(FIRST_INSTANCE_ID, turnOn);

      node.emit(INFLUX_LOGGING, {
        topic: INFLUX_LOGGING,
        payload: [
          {
            value: String(turnOn),
          },
          {
            domain: DOMAIN_LIGHT,
            event: 'light-change',
            node: node.id,
            zwave_node_id: node.getNodeId(),
            command_class_id: COMMAND_CLASS_ID,
            instance_id: FIRST_INSTANCE_ID,
            value_id: VALUE_ID,
            timestamp: Date.now(),
            first_instance_manual_mode: String(firstInstanceManualMode),
            second_instance_manual_mode: String(secondInstanceManualMode),
          },
        ],
      });
    }
    if (!secondInstanceManualMode) {
      await turnSwitch(SECOND_INSTANCE_ID, turnOn);

      node.emit(INFLUX_LOGGING, {
        topic: INFLUX_LOGGING,
        payload: [
          {
            value: String(turnOn),
          },
          {
            domain: DOMAIN_LIGHT,
            event: 'light-change',
            node: node.id,
            zwave_node_id: node.getNodeId(),
            command_class_id: COMMAND_CLASS_ID,
            instance_id: SECOND_INSTANCE_ID,
            value_id: VALUE_ID,
            timestamp: Date.now(),
            first_instance_manual_mode: String(firstInstanceManualMode),
            second_instance_manual_mode: String(secondInstanceManualMode),
          },
        ],
      });
    }
  };

  locationNode && locationNode.on(ZONE_PROBABILITY, handleZoneProbabilityChange);

  return () => {
    stopDiscovery();
    locationNode && locationNode.off(ZONE_PROBABILITY, handleZoneProbabilityChange);
  };
};
