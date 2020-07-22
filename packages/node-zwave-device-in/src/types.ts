import type * as NodeRed from 'node-red';

import { ConfigNodeZwavePickDeviceBackend } from '@sh/config-node-zwave-pick-device';

interface NodeZwaveDeviceInBaseProps {
  name: string;
  device: string;
  value: string;
}

export interface NodeZwaveDeviceInBackend extends NodeRed.Node {
  device: ConfigNodeZwavePickDeviceBackend | null;
}

export interface NodeZwaveDeviceInBackendProps extends NodeZwaveDeviceInBaseProps, NodeRed.NodeProperties {}

export interface NodeZwaveDeviceInFrontendProps extends NodeZwaveDeviceInBaseProps {}
