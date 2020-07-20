import { findKey } from 'lodash';

import { OpenZWaveEventType } from './types';

export const parsePayloadAsJSON = <PayloadType>(payload: string | { [key: string]: any }): PayloadType => {
  if (typeof payload === 'string') {
    return JSON.parse(payload);
  }

  return payload as any;
};

export const detectOpenZWaveEvent = (topic: string | undefined): OpenZWaveEventType | undefined => {
  if (typeof topic !== 'string') {
    return;
  }

  const parts = topic.split('/');
  const eventType = parts[parts.length - 1];

  if (findKey(OpenZWaveEventType, currentEventType => currentEventType === eventType)) {
    return eventType as OpenZWaveEventType;
  }

  return undefined;
};
