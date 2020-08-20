import type { NodeValue } from '@sh/config-node-zwave-pick-device';

import { ConfigNodeZwavePickDeviceBackend } from '../../types';

export interface ValuesProcessorConfig {
  node: ConfigNodeZwavePickDeviceBackend;
}

export interface ValuePath {
  commandClassId: number;
  instanceId: number;
  valueId: number;
}

export interface QueueItem {
  sendValuePath: ValuePath;
  expectValuePath: ValuePath;
  sendValue: NodeValue;
  expectValue: NodeValue;
}
