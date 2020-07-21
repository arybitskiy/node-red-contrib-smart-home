import type * as NodeRed from 'node-red';

interface ConfigNodeZwavePickDeviceBaseProps {
  name: string;
  node_id: string;
  device: string;
}

export type NodeValue = string | number | boolean;

export interface ConfigNodeZwavePickDeviceBackend extends NodeRed.Node {
  name: string;
  node_id: number;
  device: string;

  addValue: (commandClassId: number, instanceId: number, valueId: number, value: NodeValue) => Promise<void>;

  setValue: (commandClassId: number, instanceId: number, valueId: number, value: NodeValue) => Promise<void>;

  getNodeId: () => number;
}

interface NodeContextValue {
  instanceId: number;
  valueId: number;
  value: NodeValue;
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
