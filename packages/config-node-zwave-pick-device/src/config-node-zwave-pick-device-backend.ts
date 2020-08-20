import * as NodeRed from 'node-red';

import { ConfigNodeLocationBackend } from '@sh/config-node-location';
import { SELECT_DEVICE } from '@sh/text-constants';
import { getDeviceNameById } from '@sh/open-zwave-config';
import { DOMAIN_CONFIG_ZWAVE_DEVICE, INFLUX_LOGGING, NODE_KEY_CHANGED } from '@sh/constants';

import type {
  ConfigNodeZwavePickDeviceBackend,
  ConfigNodeZwavePickDeviceBackendProps,
  WebSocketMessage,
} from './types';
import { WebSocketMessageType } from './types';
import {
  readNodeContext,
  writeNodeContext,
  setValue,
  getValueKey,
  getCurrentValue,
  getSetValueTopic,
  getValues,
} from './utils';
import api from './api';
import setWebsocket from './websocketServer';
import { VALUES_SET_EVENT, WEBSOCKET_MESSAGE_EVENT, VALUE_CHANGE_EVENT } from './constants';
import { setupDevice } from './devices';

export default (RED: NodeRed.Red) => {
  const ws = setWebsocket(RED);

  function ConfigNodeZwavePickDeviceConstructor(
    this: ConfigNodeZwavePickDeviceBackend,
    props: ConfigNodeZwavePickDeviceBackendProps
  ) {
    RED.nodes.createNode(this, props);

    const { name, node_id, device, location, configuration } = props;

    this.name = name;
    this.node_id = parseInt(node_id, 10);
    this.device = device;
    this.location = location;
    try {
      this.configuration = JSON.parse(configuration);
    } catch (error) {
      this.configuration = {};
    }

    this.getKey = async key => {
      const context = await readNodeContext(this);
      return context.keys[key];
    };

    this.setKey = async (key, value) => {
      const context = await readNodeContext(this);
      await writeNodeContext(this, {
        ...context,
        keys: {
          ...context.keys,
          [key]: value,
        },
      });
      this.emit(NODE_KEY_CHANGED, { key, value });
    };

    this.getValues = async () => {
      const context = await readNodeContext(this);

      return getValues(context);
    };

    this.getLabel = () => {
      const locationNode = RED.nodes.getNode(location) as ConfigNodeLocationBackend | null;

      return (
        name ||
        `${node_id ? `${node_id}: ` : ''}${locationNode ? `${locationNode.getLabel()}: ` : ''}${
          device ? getDeviceNameById(device) : SELECT_DEVICE
        }`
      );
    };

    this.setValue = async (commandClassId, nextValueObject) => {
      const { value: nextValue } = nextValueObject;
      const context = await readNodeContext(this);

      const { instanceId, id: valueId } = nextValueObject;

      const currentValueObject = getCurrentValue(context, commandClassId, instanceId, valueId);
      const currentValue = currentValueObject?.value;

      const valueKey = getValueKey(commandClassId, nextValueObject);

      const hasChanged = currentValue !== nextValue;

      if (hasChanged) {
        void writeNodeContext(this, setValue(context, commandClassId, nextValueObject));

        ws.emit(WEBSOCKET_MESSAGE_EVENT, {
          type: WebSocketMessageType.VALUE_CHANGED,
          nodeId: this.getNodeId(),
          valueKey,
          value: nextValue,
        } as WebSocketMessage);

        this.emit(VALUE_CHANGE_EVENT, {
          topic: valueKey,
          payload: nextValue,
          nodeId: this.id,
          zwaveNodeId: this.getNodeId(),
        });
      }

      this.emit(INFLUX_LOGGING, {
        topic: INFLUX_LOGGING,
        payload: [
          {
            value: String(nextValue),
          },
          {
            domain: DOMAIN_CONFIG_ZWAVE_DEVICE,
            event: 'get-value-from-zwave-network',
            node: this.id,
            zwave_node_id: this.getNodeId(),
            command_class_id: commandClassId,
            instance_id: instanceId,
            value_id: valueId,
            timestamp: Date.now(),
            changed: String(hasChanged),
          },
        ],
      });

      this.emit(valueKey, {
        topic: valueKey,
        payload: nextValueObject,
        hasChanged,
      });
    };

    this.getValue = async (commandClassId, instanceId, valueId) => {
      const context = await readNodeContext(this);

      return getCurrentValue(context, commandClassId, instanceId, valueId)?.value;
    };

    this.sendValue = async (commandClassId, instanceId, valueId, targetValue) => {
      const context = await readNodeContext(this);
      const currentValueObject = getCurrentValue(context, commandClassId, instanceId, valueId);

      if (!currentValueObject) {
        return;
      }

      const { value: currentValue } = currentValueObject;

      this.emit(INFLUX_LOGGING, {
        topic: INFLUX_LOGGING,
        payload: [
          {
            value: String(targetValue),
          },
          {
            domain: DOMAIN_CONFIG_ZWAVE_DEVICE,
            event: 'send-value-to-zwave-network',
            node: this.id,
            zwave_node_id: this.getNodeId(),
            command_class_id: commandClassId,
            instance_id: instanceId,
            value_id: valueId,
            timestamp: Date.now(),
            currentValue: String(currentValue),
          },
        ],
      });

      this.emit(VALUES_SET_EVENT, {
        topic: getSetValueTopic(this.getNodeId(), commandClassId, instanceId, valueId),
        payload: targetValue,
      });
    };

    this.getNodeId = () => this.node_id;

    const stopDevice = setupDevice(this, RED);

    this.on('close', async () => {
      const response = await stopDevice;
      response();
    });
  }

  api(RED);

  RED.nodes.registerType('config-node-zwave-pick-device', ConfigNodeZwavePickDeviceConstructor);
};
