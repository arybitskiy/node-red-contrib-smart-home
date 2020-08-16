import * as NodeRed from 'node-red';

import type { ConfigNodeLocationBackend } from '@sh/config-node-location';
import { ZONE_PROBABILITY } from '@sh/node-presence-detection';

import type { ConfigNodeZwavePickDeviceBackend } from '../../types';
import { MQTT_DISCOVERY } from '../../constants';
import { getValueKey } from '../../utils';

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

const getMQTTConfig = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red, name: string) => {
  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;

  return {
    command_topic: '~/set',
    state_topic: '~/state',
    schema: 'json',
    device: {
      manufacturer: 'Fibaro',
      model: 'FGWDS221',
      name: `${locationNode?.name} ${node.configuration.device_name}`,
      identifiers: [`${locationNode?.name} ${node.configuration.device_name}`],
    },
    '~': getMQTTTopic(getUniqueId(name)),
    name,
    unique_id: `alexa_${getUniqueId(name)}`,
  };
};

export const FibaroWalliDoubleSwitch = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red) => {
  const firstName = getFirstName(node, RED);
  const secondName = getSecondName(node, RED);
  node.haSetStateTopics = [
    `${getMQTTTopic(getUniqueId(firstName))}/set`,
    `${getMQTTTopic(getUniqueId(secondName))}/set`,
  ];
  node.setState = async (topic, value) => {
    if (topic === `${getMQTTTopic(getUniqueId(firstName))}/set`) {
      await node.sendValue(37, 2, 0, value.state === 'ON');
    } else if (topic === `${getMQTTTopic(getUniqueId(secondName))}/set`) {
      await node.sendValue(37, 3, 0, value.state === 'ON');
    }
  };

  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;

  const turnSwitch = async (instanceId: number, value: boolean) => {
    await node.sendValue(37, instanceId, 0, value);
  };

  const handleLightChange = ({ payload: value }) => {
    node.emit(MQTT_DISCOVERY, {
      topic: `${getMQTTTopic(getUniqueId(value.instanceId === 2 ? firstName : secondName))}/state`,
      payload: { state: value.value ? 'ON' : 'OFF' },
    });
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
        payload: { state: firstState ? 'ON' : 'OFF' },
      });
      const secondState = await node.getValue(37, 3, 0);
      node.emit(MQTT_DISCOVERY, {
        topic: `${getMQTTTopic(getUniqueId(secondName))}/state`,
        payload: { state: secondState ? 'ON' : 'OFF' },
      });
    })();
  }

  node.on(getValueKey(37, { instanceId: 2, id: 0 } as any), handleLightChange);
  node.on(getValueKey(37, { instanceId: 3, id: 0 } as any), handleLightChange);

  return () => {
    locationNode && locationNode.off(ZONE_PROBABILITY, handleZoneProbabilityChange);
    node.off(getValueKey(37, { instanceId: 2, id: 0 } as any), handleLightChange);
    node.off(getValueKey(37, { instanceId: 3, id: 0 } as any), handleLightChange);
    delete node.setState;
    delete node.haSetStateTopics;
    console.log('end');
  };
};
