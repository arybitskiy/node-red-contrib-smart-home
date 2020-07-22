import * as NodeRed from 'node-red';

import type { ConfigNodeZwavePickDeviceBackend, ConfigNodeZwavePickDeviceBackendProps } from './types';
import { readNodeContext, writeNodeContext, setValue, getValueKey, getCurrentValue, getSetValueTopic } from './utils';
import api from './api';
import { VALUES_SET_EVENT } from './constants';

export default (RED: NodeRed.Red) => {
  function ConfigNodeZwavePickDeviceConstructor(
    this: ConfigNodeZwavePickDeviceBackend,
    props: ConfigNodeZwavePickDeviceBackendProps
  ) {
    RED.nodes.createNode(this, props);

    const { name, node_id, device } = props;

    const sendingValues = {} as { [key: string]: any };

    this.name = name;
    this.node_id = parseInt(node_id, 10);
    this.device = device;

    this.setValue = async (commandClassId, value) => {
      const context = await readNodeContext(this);

      const currentValue = getCurrentValue(context, commandClassId, value.instanceId, value.id);

      if (!currentValue) {
        return;
      }

      const valueKey = getValueKey(commandClassId, value);
      delete sendingValues[valueKey];

      const hasChanged = currentValue?.value !== value.value;

      if (hasChanged) {
        void writeNodeContext(this, setValue(context, commandClassId, value));
      }

      this.emit(valueKey, {
        topic: valueKey,
        payload: value,
        hasChanged,
      });
    };

    this.sendValue = async (commandClassId, instanceId, valueId, value) => {
      const context = await readNodeContext(this);

      const currentValue = getCurrentValue(context, commandClassId, instanceId, valueId);

      if (!currentValue) {
        return;
      }

      const valueKey = getValueKey(commandClassId, currentValue);

      const hasChanged = currentValue?.value !== value && sendingValues[valueKey] !== value;

      if (hasChanged) {
        sendingValues[valueKey] = value;
        this.emit(VALUES_SET_EVENT, {
          topic: getSetValueTopic(this.getNodeId(), commandClassId, instanceId, valueId),
          payload: value,
        });
      }
    };

    this.getNodeId = () => this.node_id;
  }

  RED.nodes.registerType('config-node-zwave-pick-device', ConfigNodeZwavePickDeviceConstructor);

  api(RED);
};
