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
  DIMMER_COMMAND_CLASS_ID,
  DIMMER_INSTANCE_ID,
  DIMMER_GET_LEVEL_VALUE_ID,
  DIMMER_SET_LEVEL_VALUE_ID,
  DIMMER_ON_VALUE,
  DIMMER_OFF_VALUE,
  FIRST_INSTANCE_MANUAL_MODE,
} from './constants';
import type { ValuesProcessor } from '../ValueProcessor';

const FibaroWalliDimmerSingleInstanceLightDiscovery = (
  node: ConfigNodeZwavePickDeviceBackend,
  RED: NodeRed.Red,
  valueProcessor: ValuesProcessor,
  { name, deviceName, manualModeKey }
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
      model: 'FGWD111',
      identifiers: [deviceName],
    })
  );

  // Initial State
  void (async () => {
    const state = await node.getValue(DIMMER_COMMAND_CLASS_ID, DIMMER_INSTANCE_ID, DIMMER_GET_LEVEL_VALUE_ID);
    node.emit(MQTT_DISCOVERY_OUT, getLightMQTTStateMessage({ name, state: state === DIMMER_ON_VALUE }));
  })();

  // Update State
  const handleLightChange = ({ payload: value }) => {
    node.emit(MQTT_DISCOVERY_OUT, getLightMQTTStateMessage({ name, state: value.value === DIMMER_ON_VALUE }));
  };
  node.on(
    getValueKey(DIMMER_COMMAND_CLASS_ID, { instanceId: DIMMER_INSTANCE_ID, id: DIMMER_GET_LEVEL_VALUE_ID } as any),
    handleLightChange
  );

  // Listen incoming data
  const handleRequestToChangeLight = msg => {
    if (msg.topic === setTopic) {
      try {
        const { state } = JSON.parse(msg.payload);
        const level = state === ON ? DIMMER_ON_VALUE : DIMMER_OFF_VALUE;
        const turnOn = state === ON;
        node.emit(INFLUX_LOGGING, {
          topic: INFLUX_LOGGING,
          payload: [
            {
              value: String(level),
            },
            {
              domain: DOMAIN_LIGHT,
              event: 'request-to-change-light-from-ha-received',
              node: node.id,
              zwave_node_id: node.getNodeId(),
              command_class_id: DIMMER_COMMAND_CLASS_ID,
              instance_id: DIMMER_INSTANCE_ID,
              value_id: DIMMER_SET_LEVEL_VALUE_ID,
              timestamp: Date.now(),
            },
          ],
        });
        node.setKey(manualModeKey, turnOn).catch(console.error);
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
      } catch (error) {
        console.error(error);
      }
    }
  };
  node.on(MQTT_DISCOVERY_IN, handleRequestToChangeLight);

  return () => {
    node.off(
      getValueKey(DIMMER_COMMAND_CLASS_ID, { instanceId: DIMMER_INSTANCE_ID, id: DIMMER_GET_LEVEL_VALUE_ID } as any),
      handleLightChange
    );
    node.off(MQTT_DISCOVERY_IN, handleRequestToChangeLight);
  };
};

const FibaroWalliDimmerSingleInstanceManualModeDiscovery = (
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
      model: 'FGWD111',
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

export const FibaroWalliDimmerDiscovery = (
  node: ConfigNodeZwavePickDeviceBackend,
  RED: NodeRed.Red,
  valueProcessor: ValuesProcessor
) => {
  if (!node.configuration.ha_discovery) {
    return noop;
  }

  const locationNode: ConfigNodeLocationBackend | null = RED.nodes.getNode(node.location) as any;
  const deviceName = `${locationNode?.name} ${node.configuration.device_name}`;
  const manualModeName = `${deviceName} Manual Mode`;

  node.haSetStateTopics = [];

  const stopFirstInstanceLightDiscovery = FibaroWalliDimmerSingleInstanceLightDiscovery(node, RED, valueProcessor, {
    name: deviceName,
    deviceName,
    manualModeKey: FIRST_INSTANCE_MANUAL_MODE,
  });

  const stopFirstInstanceManualModeDiscovery = FibaroWalliDimmerSingleInstanceManualModeDiscovery(
    node,
    RED,
    valueProcessor,
    {
      name: manualModeName,
      deviceName,
      manualModeKey: FIRST_INSTANCE_MANUAL_MODE,
    }
  );

  return () => {
    stopFirstInstanceLightDiscovery();
    stopFirstInstanceManualModeDiscovery();
    delete node.haSetStateTopics;
  };
};
