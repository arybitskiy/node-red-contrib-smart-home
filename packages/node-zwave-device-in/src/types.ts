import type * as NodeRed from 'node-red';

import { ConfigNodeZwavePickDeviceBackend } from '@sh/config-node-zwave-pick-device';

interface NodeZwaveDeviceInBaseProps {
  name: string;
  device: string;
}

export interface NodeZwaveDeviceInBackend extends NodeRed.Node {
  device: ConfigNodeZwavePickDeviceBackend | null;
}

export interface NodeZwaveDeviceInBackendProps extends NodeZwaveDeviceInBaseProps, NodeRed.NodeProperties {}

export interface NodeZwaveDeviceInFrontendProps extends NodeZwaveDeviceInBaseProps {}

export interface OpenZWaveValueChangedPayload {
  data: [
    number,
    number,
    {
      node_id: number;
      class_id: number;
      instance: number;
      index: number;
      value: string | number | boolean;
    }
  ];
}
