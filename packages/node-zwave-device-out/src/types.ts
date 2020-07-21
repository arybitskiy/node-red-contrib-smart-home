import type * as NodeRed from 'node-red';

import { ConfigNodeZwavePickDeviceBackend } from '@sh/config-node-zwave-pick-device';

interface NodeZwaveDeviceOutBaseProps {
  name: string;
  device: string;
  values: string[];
}

export interface NodeZwaveDeviceOutBackend extends NodeRed.Node {
  device: ConfigNodeZwavePickDeviceBackend | null;
}

export interface NodeZwaveDeviceOutBackendProps extends NodeZwaveDeviceOutBaseProps, NodeRed.NodeProperties {}

export interface NodeZwaveDeviceOutFrontendProps extends NodeZwaveDeviceOutBaseProps {}
