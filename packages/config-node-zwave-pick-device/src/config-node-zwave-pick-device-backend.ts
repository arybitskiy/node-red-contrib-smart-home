import * as NodeRed from 'node-red';

import { ConfigNodeLocationBackend } from '@sh/config-node-location';
import { SELECT_DEVICE } from '@sh/text-constants';
import { getDeviceNameById } from '@sh/open-zwave-config';

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
import { VALUES_SET_EVENT, WEBSOCKET_MESSAGE_EVENT, VALUE_CHANGE_EVENT, DEBUG } from './constants';
import { setupDevice } from './devices';

export default (RED: NodeRed.Red) => {
  const ws = setWebsocket(RED);

  function ConfigNodeZwavePickDeviceConstructor(
    this: ConfigNodeZwavePickDeviceBackend,
    props: ConfigNodeZwavePickDeviceBackendProps
  ) {
    RED.nodes.createNode(this, props);

    const { name, node_id, device, location, configuration } = props;

    const sendingValues = {} as { [key: string]: any };

    this.name = name;
    this.node_id = parseInt(node_id, 10);
    this.device = device;
    this.location = location;
    try {
      this.configuration = JSON.parse(configuration);
    } catch (error) {
      this.configuration = {};
    }

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

    this.setValue = async (commandClassId, value) => {
      const context = await readNodeContext(this);

      const currentValue = getCurrentValue(context, commandClassId, value.instanceId, value.id);

      const valueKey = getValueKey(commandClassId, value);
      delete sendingValues[valueKey];

      const hasChanged = currentValue?.value !== value.value;

      if (hasChanged) {
        void writeNodeContext(this, setValue(context, commandClassId, value));
        ws.emit(WEBSOCKET_MESSAGE_EVENT, {
          type: WebSocketMessageType.VALUE_CHANGED,
          nodeId: this.getNodeId(),
          valueKey,
          value: value.value,
        } as WebSocketMessage);
        this.emit(VALUE_CHANGE_EVENT, {
          topic: valueKey,
          payload: value.value,
          nodeId: this.id,
          zwaveNodeId: this.node_id,
        });
      }

      this.emit(valueKey, {
        topic: valueKey,
        payload: value,
        hasChanged,
      });
    };

    this.getValue = async (commandClassId, instanceId, valueId) => {
      const context = await readNodeContext(this);

      return getCurrentValue(context, commandClassId, instanceId, valueId)?.value;
    };

    this.sendValue = async (commandClassId, instanceId, valueId, value) => {
      const context = await readNodeContext(this);

      const currentValue = getCurrentValue(context, commandClassId, instanceId, valueId);
      DEBUG && console.log(this.id);
      DEBUG && console.log('currentValue: ', currentValue);

      if (!currentValue) {
        return;
      }

      const valueKey = getValueKey(commandClassId, currentValue);

      const hasChanged = currentValue?.value !== value && sendingValues[valueKey] !== value;
      DEBUG && console.log('value: ', value);
      DEBUG && console.log('sendingValues: ', sendingValues);
      DEBUG && console.log('hasChanged: ', hasChanged);

      if (hasChanged) {
        sendingValues[valueKey] = value;
        DEBUG &&
          console.log(`Emit VALUES_SET_EVENT on ${this.id} => ${commandClassId}-${instanceId}-${valueId}: ${value}`);
        this.emit(VALUES_SET_EVENT, {
          topic: getSetValueTopic(this.getNodeId(), commandClassId, instanceId, valueId),
          payload: value,
        });
      }
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
