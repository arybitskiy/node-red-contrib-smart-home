import * as NodeRed from 'node-red';

import type { ConfigNodeLocationBackend } from '@sh/config-node-location';
import { ZONE_PROBABILITY } from '@sh/node-presence-detection';

import type { ConfigNodeZwavePickDeviceBackend } from '../../types';
import { MQTT_DISCOVERY } from '../../constants';

const getUniqueId = str => str.toLowerCase().replace(/\s/g, '_');

const getMQTTTopic = id => `homeassistant/light/${id}`;

const getFirstName = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red) => {
  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;

  return `${locationNode?.name} ${node.configuration.first_name}`;
};

const getSecondName = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red) => {
  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;

  return `${locationNode?.name} ${node.configuration.second_name}`;
};

const getMQTTConfig = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red, name: string) => ({
  command_topic: '~/set',
  state_topic: '~/state',
  schema: 'json',
  '~': getMQTTTopic(getUniqueId(name)),
  name: name,
  unique_id: `alexa_${getUniqueId(name)}`,
});

export const FibaroWalliDoubleSwitch = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red) => {
  const firstName = getFirstName(node, RED);
  const secondName = getSecondName(node, RED);

  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;

  const turnSwitch = async (instanceId: number, value: boolean) => {
    await node.sendValue(37, instanceId, 0, value);
  };

  const handleZoneProbabilityChange = async ({ probability, value }) => {
    if (probability > 0.5 && value) {
      await turnSwitch(2, true);
      await turnSwitch(3, true);
    } else {
      await turnSwitch(2, false);
      await turnSwitch(3, false);
    }
  };

  locationNode && locationNode.on(ZONE_PROBABILITY, handleZoneProbabilityChange);

  if (node.configuration.ha_discovery) {
    // Discovery
    node.emit(MQTT_DISCOVERY, {
      topic: `${getMQTTTopic(getUniqueId(firstName))}/config`,
      payload: getMQTTConfig(node, RED, firstName),
    });
    node.emit(MQTT_DISCOVERY, {
      topic: `${getMQTTTopic(getUniqueId(secondName))}/config`,
      payload: getMQTTConfig(node, RED, secondName),
    });

    // State
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    (async () => {
      const firstState = await node.getValue(37, 2, 0);
      node.emit(MQTT_DISCOVERY, {
        topic: `${getMQTTTopic(getUniqueId(firstName))}/state`,
        payload: { state: firstState ? 'on' : 'off' },
      });
      const secondState = await node.getValue(37, 3, 0);
      node.emit(MQTT_DISCOVERY, {
        topic: `${getMQTTTopic(getUniqueId(secondName))}/state`,
        payload: { state: secondState ? 'on' : 'off' },
      });
    })();
  }

  return () => {
    locationNode && locationNode.off(ZONE_PROBABILITY, handleZoneProbabilityChange);
    console.log('end');
  };
};
