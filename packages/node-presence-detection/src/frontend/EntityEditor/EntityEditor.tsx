import React, { FunctionComponent } from 'react';

import { ZoneEditor } from './ZoneEditor';
import { SensorEditor } from './SensorEditor';
import type { NodeAll, EdgeAll } from '../types';
import { NodeTypes } from '../types';

interface EntityEditorProps {
  entity: EdgeAll | NodeAll | null;
  onNodeChange: (node: NodeAll) => void;
}

export const EntityEditor: FunctionComponent<EntityEditorProps> = ({ entity, onNodeChange }) => {
  if (!entity) {
    return null;
  }

  if (entity.type === NodeTypes.ZONE) {
    return <ZoneEditor entity={entity} onNodeChange={onNodeChange} />;
  }

  if (entity.type === NodeTypes.MOTION_SENSOR || entity.type === NodeTypes.OPEN_LOCK_SENSOR) {
    return <SensorEditor entity={entity} onNodeChange={onNodeChange} />;
  }

  return null;
};
