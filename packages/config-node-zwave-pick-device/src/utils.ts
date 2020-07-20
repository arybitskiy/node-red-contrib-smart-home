import { VALUES } from './constants';

export const getValueKey = (commandClassId: number, instanceId: number, valueId: number) =>
  `${VALUES}-${commandClassId}-${instanceId}-${valueId}`;
