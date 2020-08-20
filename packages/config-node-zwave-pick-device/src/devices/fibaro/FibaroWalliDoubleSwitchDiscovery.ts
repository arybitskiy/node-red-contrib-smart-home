import * as NodeRed from 'node-red';
import { noop } from 'lodash';

import { NODE_KEY_CHANGED } from '@sh/constants';
import type { ConfigNodeLocationBackend } from '@sh/config-node-location';
import { INFLUX_LOGGING } from '@sh/constants';

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
  DOMAIN_LIGHT,
} from '../../mqttDiscovery';
import {
  DOUBLE_SWITCH_COMMAND_CLASS_ID,
  DOUBLE_SWITCH_FIRST_INSTANCE_ID,
  DOUBLE_SWITCH_SECOND_INSTANCE_ID,
  DOUBLE_SWITCH_VALUE_ID,
  FIRST_INSTANCE_MANUAL_MODE,
  SECOND_INSTANCE_MANUAL_MODE,
} from './constants';
import type { ValuesProcessor } from '../ValueProcessor';

const FibaroWalliDoubleSwitchSingleInstanceLightDiscovery = (
  node: ConfigNodeZwavePickDeviceBackend,
  RED: NodeRed.Red,
  valueProcessor: ValuesProcessor,
  { name, deviceName, instanceId, manualModeKey }
) => {
  const setTopic = `${getLightMQTTTopic(name)}/set`;
  (node.haSetStateTopics as string[]).push(setTopic);

  // Initial Discovery
  node.emit(
    MQTT_DISCOVERY_OUT,
    getLightMQTTConfigMessage({
      name,
      deviceName,
      manufacturer: 'Fibaro',
      model: 'FGWDS221',
      identifiers: [deviceName],
    })
  );

  // Initial State
  void (async () => {
    const state = await node.getValue(DOUBLE_SWITCH_COMMAND_CLASS_ID, instanceId, DOUBLE_SWITCH_VALUE_ID);
    node.emit(MQTT_DISCOVERY_OUT, getLightMQTTStateMessage({ name, state: state as boolean }));
  })();

  // Update State
  const handleLightChange = ({ payload: value }) => {
    node.emit(MQTT_DISCOVERY_OUT, getLightMQTTStateMessage({ name, state: value.value as boolean }));
  };
  node.on(getValueKey(DOUBLE_SWITCH_COMMAND_CLASS_ID, { instanceId, id: DOUBLE_SWITCH_VALUE_ID } as any), handleLightChange);

  // Listen incoming data
  const handleRequestToChangeLight = msg => {
    if (msg.topic === setTopic) {
      try {
        const { state } = JSON.parse(msg.payload);
        const turnOn = state === ON;
        node.emit(INFLUX_LOGGING, {
          topic: INFLUX_LOGGING,
          payload: [
            {
              value: String(turnOn),
            },
            {
              domain: DOMAIN_LIGHT,
              event: 'request-to-change-light-from-ha-received',
              node: node.id,
              zwave_node_id: node.getNodeId(),
              command_class_id: DOUBLE_SWITCH_COMMAND_CLASS_ID,
              instance_id: instanceId,
              value_id: DOUBLE_SWITCH_VALUE_ID,
              timestamp: Date.now(),
            },
          ],
        });
        node.setKey(manualModeKey, turnOn).catch(console.error);
        valueProcessor.sendAndExpect({ commandClassId: DOUBLE_SWITCH_COMMAND_CLASS_ID, instanceId, valueId: DOUBLE_SWITCH_VALUE_ID }, turnOn);
      } catch (error) {
        console.error(error);
      }
    }
  };
  node.on(MQTT_DISCOVERY_IN, handleRequestToChangeLight);

  return () => {
    node.off(getValueKey(DOUBLE_SWITCH_COMMAND_CLASS_ID, { instanceId, id: DOUBLE_SWITCH_VALUE_ID } as any), handleLightChange);
    node.off(MQTT_DISCOVERY_IN, handleRequestToChangeLight);
  };
};

const FibaroWalliDoubleSwitchSingleInstanceManualModeDiscovery = (
  node: ConfigNodeZwavePickDeviceBackend,
  RED: NodeRed.Red,
  valueProcessor: ValuesProcessor,
  { name, deviceName, manualModeKey }
) => {
  const setTopic = `${getSwitchMQTTTopic(name)}/set`;
  (node.haSetStateTopics as string[]).push(setTopic);

  // Initial Discovery
  node.emit(
    MQTT_DISCOVERY_OUT,
    getSwitchMQTTConfigMessage({
      name: name,
      deviceName,
      manufacturer: 'Fibaro',
      model: 'FGWDS221',
      identifiers: [deviceName],
    })
  );

  // Initial State
  void (async () => {
    const state = await node.getKey(manualModeKey);
    node.emit(MQTT_DISCOVERY_OUT, getSwitchMQTTStateMessage({ name, state: state as boolean }));
  })();

  // Listen incoming data
  const handleRequestToChangeSwitch = async msg => {
    if (msg.topic === setTopic) {
      try {
        const isEnabled = msg.payload === ON;
        await node.setKey(manualModeKey, isEnabled);
      } catch (error) {
        console.error(error);
      }
    }
  };
  node.on(MQTT_DISCOVERY_IN, handleRequestToChangeSwitch);

  const handleKeyChange = msg => {
    if (msg.key === manualModeKey) {
      node.emit(MQTT_DISCOVERY_OUT, getSwitchMQTTStateMessage({ name, state: msg.value }));
    }
  };
  node.on(NODE_KEY_CHANGED, handleKeyChange);

  return () => {
    node.off(MQTT_DISCOVERY_IN, handleRequestToChangeSwitch);
    node.off(NODE_KEY_CHANGED, handleKeyChange);
  };
};

export const FibaroWalliDoubleSwitchDiscovery = (
  node: ConfigNodeZwavePickDeviceBackend,
  RED: NodeRed.Red,
  valueProcessor: ValuesProcessor
) => {
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

  const stopFirstInstanceLightDiscovery = FibaroWalliDoubleSwitchSingleInstanceLightDiscovery(
    node,
    RED,
    valueProcessor,
    {
      name: firstName,
      deviceName,
      instanceId: DOUBLE_SWITCH_FIRST_INSTANCE_ID,
      manualModeKey: FIRST_INSTANCE_MANUAL_MODE,
    }
  );

  const stopSecondInstanceLightDiscovery = FibaroWalliDoubleSwitchSingleInstanceLightDiscovery(
    node,
    RED,
    valueProcessor,
    {
      name: secondName,
      deviceName,
      instanceId: DOUBLE_SWITCH_SECOND_INSTANCE_ID,
      manualModeKey: SECOND_INSTANCE_MANUAL_MODE,
    }
  );

  const stopFirstInstanceManualModeDiscovery = FibaroWalliDoubleSwitchSingleInstanceManualModeDiscovery(
    node,
    RED,
    valueProcessor,
    {
      name: firstManualModeName,
      deviceName,
      manualModeKey: FIRST_INSTANCE_MANUAL_MODE,
    }
  );

  const stopSecondInstanceManualModeDiscovery = FibaroWalliDoubleSwitchSingleInstanceManualModeDiscovery(
    node,
    RED,
    valueProcessor,
    {
      name: secondManualModeName,
      deviceName,
      manualModeKey: SECOND_INSTANCE_MANUAL_MODE,
    }
  );

  return () => {
    stopFirstInstanceLightDiscovery();
    stopSecondInstanceLightDiscovery();
    stopFirstInstanceManualModeDiscovery();
    stopSecondInstanceManualModeDiscovery();
    delete node.haSetStateTopics;
  };
};
