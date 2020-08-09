import React from 'react';

import { EdgeTypes, NodeTypes } from './types';

const BaseEdge = id => (
  <symbol viewBox="0 0 50 50" id={id}>
    <circle cx="25" cy="25" r="8" fill="currentColor" />
  </symbol>
);

const BaseNode = id => (
  <symbol viewBox="0 0 154 154" width="154" height="154" id={id}>
    <circle cx="77" cy="77" r="76" />
  </symbol>
);

export const EdgeTypesDefinition = {
  [EdgeTypes.DEFAULT]: {
    shape: BaseEdge('defaultEdge'),
    shapeId: '#defaultEdge',
  },
};

export const NodeTypesDefinition = {
  [NodeTypes.MOTION_SENSOR]: {
    shape: BaseNode('motionSensorNode'),
    shapeId: '#motionSensorNode',
  },
  [NodeTypes.ZONE]: {
    shape: BaseNode('zoneNode'),
    shapeId: '#zoneNode',
  },
  [NodeTypes.OPEN_LOCK_SENSOR]: {
    shape: BaseNode('openLockSensorNode'),
    shapeId: '#openLockSensorNode',
  },
};

export const NodeSubtypesDefinition = {};
