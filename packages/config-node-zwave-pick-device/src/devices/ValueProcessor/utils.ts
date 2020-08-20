import type { QueueItem, ValuePath } from './types';
import { getValueKey } from '../../utils';

export const getQueueItemHash = (queryItem: QueueItem) =>
  `${queryItem.expectValuePath.commandClassId}-${queryItem.expectValuePath.instanceId}-${queryItem.expectValuePath.valueId}`;

export const getValuePathHash = (valuePath: ValuePath) =>
  `${valuePath.commandClassId}-${valuePath.instanceId}-${valuePath.valueId}`;

export const getNodeValueKey = (valuePath: ValuePath) =>
  getValueKey(valuePath.commandClassId, { instanceId: valuePath.instanceId, id: valuePath.valueId });
