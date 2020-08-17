import * as NodeRed from 'node-red';
import { noop } from 'lodash';

import type { ConfigNodeLocationBackend } from '@sh/config-node-location';

import type { ConfigNodeZwavePickDeviceBackend } from '../../types';
import { MQTT_DISCOVERY } from '../../constants';
import { getValueKey } from '../../utils';
import { COMMAND_CLASS_ID, FIRST_INSTANCE_ID, SECOND_INSTANCE_ID, VALUE_ID, ON, OFF } from './constants';

const getUniqueId = str => str.toLowerCase().replace(/\s/g, '_');

const getLightMQTTTopic = id => `homeassistant/light/${id}`;

const getSwitchMQTTTopic = id => `homeassistant/switch/${id}`;

const getLightMQTTConfig = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red, name: string) => {
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
    '~': getLightMQTTTopic(getUniqueId(name)),
    name,
    unique_id: `light_${getUniqueId(name)}`,
  };
};

const getSwitchMQTTConfig = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red, name: string) => {
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
    '~': getSwitchMQTTTopic(getUniqueId(name)),
    name,
    unique_id: `switch_${getUniqueId(name)}`,
  };
};

const FibaroWalliDoubleSwitchSingleInstanceDiscovery = (
  node: ConfigNodeZwavePickDeviceBackend,
  RED: NodeRed.Red,
  { name, instanceId }
) => {
  // Discovery
  node.emit(MQTT_DISCOVERY, {
    topic: `${getLightMQTTTopic(getUniqueId(name))}/config`,
    payload: getLightMQTTConfig(node, RED, name),
  });

  // State
  // eslint-disable-next-line @typescript-eslint/no-floating-promises
  (async () => {
    const state = await node.getValue(COMMAND_CLASS_ID, instanceId, VALUE_ID);
    node.emit(MQTT_DISCOVERY, {
      topic: `${getLightMQTTTopic(getUniqueId(name))}/state`,
      payload: { state: state ? ON : OFF },
    });
  })();

  const handleLightChange = ({ payload: value }) => {
    node.emit(MQTT_DISCOVERY, {
      topic: `${getLightMQTTTopic(getUniqueId(name))}/state`,
      payload: { state: value.value ? ON : OFF },
    });
  };

  node.on(getValueKey(COMMAND_CLASS_ID, { instanceId, id: VALUE_ID } as any), handleLightChange);

  return () => {
    node.off(getValueKey(COMMAND_CLASS_ID, { instanceId, id: VALUE_ID } as any), handleLightChange);
  };
};

export const FibaroWalliDoubleSwitchDiscovery = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red) => {
  if (!node.configuration.ha_discovery) {
    return noop;
  }

  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;
  const firstName = `${locationNode?.name} ${node.configuration.first_name}`;
  const secondName = `${locationNode?.name} ${node.configuration.second_name}`;
  const firstSetTopic = `${getLightMQTTTopic(getUniqueId(firstName))}/set`;
  const secondSetTopic = `${getLightMQTTTopic(getUniqueId(secondName))}/set`;

  node.haSetStateTopics = [firstSetTopic, secondSetTopic];

  node.setState = async (topic, value) => {
    if (topic === firstSetTopic) {
      await node.sendValue(COMMAND_CLASS_ID, FIRST_INSTANCE_ID, VALUE_ID, value.state === ON);
    } else if (topic === secondSetTopic) {
      await node.sendValue(COMMAND_CLASS_ID, SECOND_INSTANCE_ID, VALUE_ID, value.state === ON);
    }
  };

  const stopFirstInstanceDiscovery = FibaroWalliDoubleSwitchSingleInstanceDiscovery(node, RED, {
    name: firstName,
    instanceId: FIRST_INSTANCE_ID,
  });

  const stopSecondInstanceDiscovery = FibaroWalliDoubleSwitchSingleInstanceDiscovery(node, RED, {
    name: secondName,
    instanceId: SECOND_INSTANCE_ID,
  });

  return () => {
    stopFirstInstanceDiscovery();
    stopSecondInstanceDiscovery();
    delete node.setState;
    delete node.haSetStateTopics;
  };
};
