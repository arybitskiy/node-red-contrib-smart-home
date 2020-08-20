import * as NodeRed from 'node-red';

import type { ConfigNodeLocationBackend } from '@sh/config-node-location';
import { ZONE_PROBABILITY } from '@sh/node-presence-detection';
import { INFLUX_LOGGING } from '@sh/constants';

import type { ConfigNodeZwavePickDeviceBackend } from '../../types';
import {
  DIMMER_COMMAND_CLASS_ID,
  DIMMER_INSTANCE_ID,
  DIMMER_GET_LEVEL_VALUE_ID,
  DIMMER_SET_LEVEL_VALUE_ID,
  DIMMER_ON_VALUE,
  DIMMER_OFF_VALUE,
  FIRST_INSTANCE_MANUAL_MODE,
} from './constants';
import { FibaroWalliDimmerDiscovery } from './FibaroWalliDimmerDiscovery';
import { DOMAIN_LIGHT } from '../../mqttDiscovery';
import { ValuesProcessor } from '../ValueProcessor';

export const FibaroWalliDimmer = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red) => {
  const valueProcessor = new ValuesProcessor({ node });
  const stopDiscovery = FibaroWalliDimmerDiscovery(node, RED, valueProcessor);

  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;

  const turnSwitch = (value: boolean) => {
    const level = value ? DIMMER_ON_VALUE : DIMMER_OFF_VALUE;
    valueProcessor.sendAndExpect(
      {
        commandClassId: DIMMER_COMMAND_CLASS_ID,
        instanceId: DIMMER_INSTANCE_ID,
        valueId: DIMMER_SET_LEVEL_VALUE_ID,
      },
      level,
      level,
      {
        commandClassId: DIMMER_COMMAND_CLASS_ID,
        instanceId: DIMMER_INSTANCE_ID,
        valueId: DIMMER_GET_LEVEL_VALUE_ID,
      }
    );
  };

  const handleZoneProbabilityChange = async ({ probability, value }) => {
    const manualMode = node.configuration.manual_mode && (await node.getKey(FIRST_INSTANCE_MANUAL_MODE));
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
          command_class_id: DIMMER_COMMAND_CLASS_ID,
          instance_id: DIMMER_INSTANCE_ID,
          value_id: DIMMER_SET_LEVEL_VALUE_ID,
          timestamp: Date.now(),
          first_instance_manual_mode: String(manualMode),
        },
      ],
    });

    if (!manualMode) {
      turnSwitch(turnOn);

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
            command_class_id: DIMMER_COMMAND_CLASS_ID,
            instance_id: DIMMER_INSTANCE_ID,
            value_id: DIMMER_SET_LEVEL_VALUE_ID,
            timestamp: Date.now(),
            first_instance_manual_mode: String(manualMode),
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
