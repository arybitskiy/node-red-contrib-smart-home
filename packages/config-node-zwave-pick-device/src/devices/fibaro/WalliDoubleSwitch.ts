import * as NodeRed from 'node-red';

import type { ConfigNodeLocationBackend } from '@sh/config-node-location';
import { ZONE_PROBABILITY } from '@sh/node-presence-detection';
import { INFLUX_LOGGING } from '@sh/constants';

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
import { ValuesProcessor } from '../ValueProcessor';

export const FibaroWalliDoubleSwitch = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red) => {
  const valueProcessor = new ValuesProcessor({ node });
  const stopDiscovery = FibaroWalliDoubleSwitchDiscovery(node, RED, valueProcessor);

  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;

  const turnSwitch = (instanceId: number, value: boolean) => {
    valueProcessor.sendAndExpect({ commandClassId: COMMAND_CLASS_ID, instanceId, valueId: VALUE_ID }, value);
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
      turnSwitch(FIRST_INSTANCE_ID, turnOn);

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
      turnSwitch(SECOND_INSTANCE_ID, turnOn);

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
    valueProcessor.destroy();
  };
};
