import * as NodeRed from 'node-red';
import { noop } from 'lodash';

import type { ConfigNodeLocationBackend } from '@sh/config-node-location';

import type { ConfigNodeZwavePickDeviceBackend } from '../../types';
import { MQTT_DISCOVERY_OUT, MQTT_DISCOVERY_IN } from '../../constants';
import { getValueKey } from '../../utils';
import {
  getLightMQTTConfigMessage,
  getLightMQTTStateMessage,
  getLightMQTTTopic,
  ON,
  getSwitchMQTTTopic,
  getSwitchMQTTConfigMessage,
  getSwitchMQTTStateMessage,
} from '../../mqttDiscovery';
import {
  COMMAND_CLASS_ID,
  FIRST_INSTANCE_ID,
  SECOND_INSTANCE_ID,
  VALUE_ID,
  FIRST_INSTANCE_MANUAL_MODE,
  SECOND_INSTANCE_MANUAL_MODE,
} from './constants';

const FibaroWalliDoubleSwitchSingleInstanceLightDiscovery = (
  node: ConfigNodeZwavePickDeviceBackend,
  RED: NodeRed.Red,
  { name, deviceName, instanceId, key }
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
      identifiers: [deviceName],
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
        const turnOn = state === ON;
        node.setKey(key, turnOn).catch(console.error);
        node.sendValue(COMMAND_CLASS_ID, FIRST_INSTANCE_ID, VALUE_ID, turnOn).catch(console.error);
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

const FibaroWalliDoubleSwitchSingleInstanceManualModeDiscovery = (
  node: ConfigNodeZwavePickDeviceBackend,
  RED: NodeRed.Red,
  { name, deviceName, key }
) => {
  const setTopic = `${getSwitchMQTTTopic(name)}/set`;
  (node.haSetStateTopics as string[]).push(setTopic);

  // Initial Discovery
  node.emit(
    MQTT_DISCOVERY_OUT,
    getSwitchMQTTConfigMessage({
      name: name,
      manufacturer: 'Fibaro',
      model: 'FGWDS221',
      identifiers: [deviceName],
    })
  );

  // Initial State
  void (async () => {
    const state = await node.getKey(key);
    node.emit(MQTT_DISCOVERY_OUT, getSwitchMQTTStateMessage({ name, state: state as boolean }));
  })();

  // Listen incoming data
  const handleRequestToChangeSwitch = async msg => {
    if (msg.topic === setTopic) {
      try {
        const { state } = JSON.parse(msg.payload);
        const isEnabled = state === ON;
        await node.setKey(key, isEnabled);
        node.emit(MQTT_DISCOVERY_OUT, getSwitchMQTTStateMessage({ name, state: isEnabled }));
      } catch (error) {
        console.error(error);
      }
    }
  };
  node.on(MQTT_DISCOVERY_IN, handleRequestToChangeSwitch);

  return () => {
    node.off(MQTT_DISCOVERY_IN, handleRequestToChangeSwitch);
  };
};

export const FibaroWalliDoubleSwitchDiscovery = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red) => {
  if (!node.configuration.ha_discovery) {
    return noop;
  }

  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;
  const deviceName = `${locationNode?.name} ${node.configuration.device_name}`;
  const firstName = `${locationNode?.name} ${node.configuration.first_name}`;
  const secondName = `${locationNode?.name} ${node.configuration.second_name}`;
  const firstManualModeName = `${firstName} Manual Mode`;
  const secondManualModeName = `${secondName} Manual Mode`;

  node.haSetStateTopics = [];

  const stopFirstInstanceLightDiscovery = FibaroWalliDoubleSwitchSingleInstanceLightDiscovery(node, RED, {
    name: firstName,
    deviceName,
    instanceId: FIRST_INSTANCE_ID,
    key: FIRST_INSTANCE_MANUAL_MODE,
  });

  const stopSecondInstanceLightDiscovery = FibaroWalliDoubleSwitchSingleInstanceLightDiscovery(node, RED, {
    name: secondName,
    deviceName,
    instanceId: SECOND_INSTANCE_ID,
    key: SECOND_INSTANCE_MANUAL_MODE,
  });

  const stopFirstInstanceManualModeDiscovery = FibaroWalliDoubleSwitchSingleInstanceManualModeDiscovery(node, RED, {
    name: firstManualModeName,
    deviceName,
    key: FIRST_INSTANCE_MANUAL_MODE,
  });

  const stopSecondInstanceManualModeDiscovery = FibaroWalliDoubleSwitchSingleInstanceManualModeDiscovery(node, RED, {
    name: secondManualModeName,
    deviceName,
    key: SECOND_INSTANCE_MANUAL_MODE,
  });

  return () => {
    stopFirstInstanceLightDiscovery();
    stopSecondInstanceLightDiscovery();
    stopFirstInstanceManualModeDiscovery();
    stopSecondInstanceManualModeDiscovery();
    delete node.haSetStateTopics;
  };
};
