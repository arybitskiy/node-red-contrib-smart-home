import type * as NodeRed from 'node-red';

import type { ConfigNodeZwavePickDeviceBackend } from '@sh/config-node-zwave-pick-device';
import type { DeviceConfigurationType } from '@sh/open-zwave-config';

interface NodeZwaveDeviceInMqttBaseProps {
  name: string;
  device: string;
}

export interface NodeZwaveDeviceInMqttBackend extends NodeRed.Node {
  device: ConfigNodeZwavePickDeviceBackend | null;
}

export interface NodeZwaveDeviceInMqttBackendProps extends NodeZwaveDeviceInMqttBaseProps, NodeRed.NodeProperties {}

export interface NodeZwaveDeviceInMqttFrontendProps extends NodeZwaveDeviceInMqttBaseProps {}

export interface OpenZWaveValueChangedPayload {
  data: [
    number,
    number,
    {
      value_id: string;
      node_id: number;
      class_id: number;
      instance: number;
      index: number;
      value: string | number | boolean;
      type: DeviceConfigurationType['Value']['type'];
      genre: DeviceConfigurationType['Value']['genre'];
      label?: string;
      units?: string;
      help?: string;
      read_only: boolean;
      write_only: boolean;
      min: number;
      max: number;
      is_polled: boolean;
      values?: string[];
    }
  ];
}
