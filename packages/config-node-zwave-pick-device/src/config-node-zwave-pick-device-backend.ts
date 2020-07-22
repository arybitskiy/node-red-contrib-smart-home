import * as NodeRed from 'node-red';

import type { ConfigNodeZwavePickDeviceBackend, ConfigNodeZwavePickDeviceBackendProps } from './types';
import { readNodeContext, writeNodeContext, setValue, getValueKey } from './utils';
import api from './api';

export default (RED: NodeRed.Red) => {
  function ConfigNodeZwavePickDeviceConstructor(
    this: ConfigNodeZwavePickDeviceBackend,
    props: ConfigNodeZwavePickDeviceBackendProps
  ) {
    RED.nodes.createNode(this, props);

    const { name, node_id, device } = props;

    this.name = name;
    this.node_id = parseInt(node_id, 10);
    this.device = device;

    this.setValue = async (commandClassId, value) => {
      const context = await readNodeContext(this);
      await writeNodeContext(this, setValue(context, commandClassId, value));

      const valueEvent = getValueKey(commandClassId, value);

      this.emit(valueEvent, {
        topic: valueEvent,
        payload: value,
      });
    };

    this.getNodeId = () => this.node_id;
  }

  RED.nodes.registerType('config-node-zwave-pick-device', ConfigNodeZwavePickDeviceConstructor);

  api(RED);
};
