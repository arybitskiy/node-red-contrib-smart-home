import type * as NodeRed from 'node-red';

interface NodeZwaveDeviceOutBaseProps {
  name: string;
  device: string;
  value: string[];
}

export interface NodeZwaveDeviceOutBackend extends NodeRed.Node {}

export interface NodeZwaveDeviceOutBackendProps extends NodeZwaveDeviceOutBaseProps, NodeRed.NodeProperties {}

export interface NodeZwaveDeviceOutFrontendProps extends NodeZwaveDeviceOutBaseProps {}
