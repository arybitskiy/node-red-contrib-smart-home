import type * as NodeRed from 'node-red';

import type { DeviceConfigurationType } from '@sh/open-zwave-config';

interface ConfigNodeZwavePickDeviceBaseProps {
  name: string;
  node_id: string;
  device: string;
  location: string;
  configuration: string;
}

export interface NodeKeyValues {
  [key: string]: NodeValue;
}

export type NodeValue = string | number | boolean | undefined;

export interface ConfigNodeZwavePickDeviceBackend extends NodeRed.Node {
  name: string;
  node_id: number;
  device: string;
  location: string;
  configuration: { [key: string]: string | number | undefined };

  haSetStateTopics?: string[];

  setState: (topic: string, value: { [key: string]: string | number | boolean }) => Promise<void>;

  setValue: (commandClassId: number, value: NodeContextValue) => Promise<void>;

  getValue: (
    commandClassId: number,
    instanceId: number,
    valueId: number
  ) => Promise<string | number | boolean | undefined>;

  sendValue: (
    commandClassId: number,
    instanceId: number,
    valueId: number,
    value: NodeValue | undefined
  ) => Promise<void>;

  getNodeId: () => number;

  getLabel: () => string;

  getValues: () => Promise<NodeKeyValues>;
}

export interface NodeContextValueOption {
  id: number;
  index: number;
  value: string;
}

export type NodeContextValueType = DeviceConfigurationType['Value']['type'];

export interface NodeContextValue {
  id: number;
  instanceId: number;
  value?: NodeValue;
  targetValue?: NodeValue;
  targetValueAt?: number;
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
  switches?: { [key: string]: boolean };
}

export interface ConfigNodeZwavePickDeviceBackendProps
  extends ConfigNodeZwavePickDeviceBaseProps,
    NodeRed.NodeProperties {}

export interface ConfigNodeZwavePickDeviceFrontendProps extends ConfigNodeZwavePickDeviceBaseProps {}

export type ReadAllNodesResponse = { id: string; label: string; nodeId: number }[];

export enum WebSocketMessageType {
  VALUE_CHANGED = 'VALUE_CHANGED',
  ALL_VALUES = 'ALL_VALUES',
}

export interface WebSocketMessage {
  type: WebSocketMessageType;
  nodeId: number;
  valueKey: string;
  value: string | number | boolean;
}

export interface NodesKeyValues {
  [key: string]: NodeKeyValues;
}
