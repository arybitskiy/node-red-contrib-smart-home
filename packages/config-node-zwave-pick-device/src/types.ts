import type * as NodeRed from 'node-red';

interface ConfigNodeZwavePickDeviceBaseProps {
  name: string;
  node_id: string;
  device: string;
}

export interface ConfigNodeZwavePickDeviceBackend extends NodeRed.Node {
  name: string;
  node_id: number;
  device: string;

  setValue: (
    commandClassId: number,
    instanceId: number,
    valueId: number,
    value: string | number | boolean
  ) => Promise<void>;

  getValue: (
    commandClassId: number,
    instanceId: number,
    valueId: number
  ) => Promise<string | number | boolean | undefined>;

  getNodeId: () => number;
}

export interface ConfigNodeZwavePickDeviceBackendProps
  extends ConfigNodeZwavePickDeviceBaseProps,
    NodeRed.NodeProperties {}

export interface ConfigNodeZwavePickDeviceFrontendProps extends ConfigNodeZwavePickDeviceBaseProps {}
