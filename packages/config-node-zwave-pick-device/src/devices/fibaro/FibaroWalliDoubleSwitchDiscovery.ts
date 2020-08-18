import * as NodeRed from 'node-red';
import { noop } from 'lodash';

import type { ConfigNodeLocationBackend } from '@sh/config-node-location';

import type { ConfigNodeZwavePickDeviceBackend } from '../../types';
import { MQTT_DISCOVERY_OUT, MQTT_DISCOVERY_IN } from '../../constants';
import { getValueKey } from '../../utils';
import { getLightMQTTConfigMessage, getLightMQTTStateMessage, getLightMQTTTopic, ON } from '../../mqttDiscovery';
import { COMMAND_CLASS_ID, FIRST_INSTANCE_ID, SECOND_INSTANCE_ID, VALUE_ID } from './constants';

const FibaroWalliDoubleSwitchSingleInstanceDiscovery = (
  node: ConfigNodeZwavePickDeviceBackend,
  RED: NodeRed.Red,
  { name, instanceId }
) => {
  const setTopic = `${getLightMQTTTopic(name)}/set`;
  (node.haSetStateTopics as string[]).push(setTopic);

  // Initial Discovery
  node.emit(
    MQTT_DISCOVERY_OUT,
    getLightMQTTConfigMessage({
      name,
      manufacturer: 'Fibaro',
      model: 'FGWDS221',
      identifiers: [name],
    })
  );

  // Initial State
  void (async () => {
    const state = await node.getValue(COMMAND_CLASS_ID, instanceId, VALUE_ID);
    node.emit(MQTT_DISCOVERY_OUT, getLightMQTTStateMessage({ name, state: state as boolean }));
  })();

  // Update State
  const handleLightChange = ({ payload: value }) => {
    node.emit(MQTT_DISCOVERY_OUT, getLightMQTTStateMessage({ name, state: value.value as boolean }));
  };
  node.on(getValueKey(COMMAND_CLASS_ID, { instanceId, id: VALUE_ID } as any), handleLightChange);

  // Listen incoming data
  const handleRequestToChangeLight = msg => {
    if (msg.topic === setTopic) {
      try {
        const { state } = JSON.parse(msg.payload);
        node.sendValue(COMMAND_CLASS_ID, FIRST_INSTANCE_ID, VALUE_ID, state === ON).catch(console.error);
      } catch (error) {
        console.error(error);
      }
    }
  };
  node.on(MQTT_DISCOVERY_IN, handleRequestToChangeLight);

  return () => {
    node.off(getValueKey(COMMAND_CLASS_ID, { instanceId, id: VALUE_ID } as any), handleLightChange);
    node.off(MQTT_DISCOVERY_IN, handleRequestToChangeLight);
  };
};

export const FibaroWalliDoubleSwitchDiscovery = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red) => {
  if (!node.configuration.ha_discovery) {
    return noop;
  }

  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;
  const firstName = `${locationNode?.name} ${node.configuration.first_name}`;
  const secondName = `${locationNode?.name} ${node.configuration.second_name}`;

  node.haSetStateTopics = [];

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
