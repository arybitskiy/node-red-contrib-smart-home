import React, { FunctionComponent, useCallback } from 'react';

import type { NodeZone } from '../types';
import { LocationsNodeSelect } from './LocationsNodeSelect';

interface ZoneEditorProps {
  entity: NodeZone;
  onNodeChange: (node: NodeZone) => void;
}

export const ZoneEditor: FunctionComponent<ZoneEditorProps> = ({ entity, onNodeChange }) => {
  const handleNodeChange = useCallback(
    (nodeId: string | undefined) => {
      onNodeChange({ ...entity, nodeId });
    },
    [onNodeChange, entity]
  );

  return (
    <>
      <div>
        <LocationsNodeSelect value={entity.nodeId} onChange={handleNodeChange} />
      </div>
    </>
  );
};
