import type * as NodeRed from 'node-red';

import type { DeviceConfigurationType } from '@sh/open-zwave-config';

interface ConfigNodeZwavePickDeviceBaseProps {
  name: string;
  node_id: string;
  device: string;
  location: string;
}

export type NodeValue = string | number | boolean;

export interface ConfigNodeZwavePickDeviceBackend extends NodeRed.Node {
  name: string;
  node_id: number;
  device: string;

  setValue: (commandClassId: number, value: NodeContextValue) => Promise<void>;

  sendValue: (
    commandClassId: number,
    instanceId: number,
    valueId: number,
    value: NodeValue | undefined
  ) => Promise<void>;

  getNodeId: () => number;
}

export interface NodeContextValueOption {
  id: number;
  index: number;
  value: string;
}

export interface NodeContextValue {
  id: number;
  instanceId: number;
  value?: NodeValue;
  type: DeviceConfigurationType['Value']['type'];
  genre: DeviceConfigurationType['Value']['genre'];
  units?: string;
  help?: string;
  isReadOnly: boolean;
  isWriteOnly: boolean;
  min: number;
  max: number;
  isPolled: boolean;
  options?: NodeContextValueOption[];
}

export interface NodeContextCommandClass {
  id: number;
  values: NodeContextValue[];
}

export interface NodeContext {
  commandClasses: NodeContextCommandClass[];
}

export interface ConfigNodeZwavePickDeviceBackendProps
  extends ConfigNodeZwavePickDeviceBaseProps,
    NodeRed.NodeProperties {}

export interface ConfigNodeZwavePickDeviceFrontendProps extends ConfigNodeZwavePickDeviceBaseProps {}
