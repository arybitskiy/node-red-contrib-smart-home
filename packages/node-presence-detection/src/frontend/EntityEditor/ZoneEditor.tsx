import React, { FunctionComponent, useCallback, ChangeEvent } from 'react';

import type { NodeZone } from '../types';

interface ZoneEditorProps {
  entity: NodeZone;
  onNodeChange: (node: NodeZone) => void;
}

export const ZoneEditor: FunctionComponent<ZoneEditorProps> = ({ entity, onNodeChange }) => {
  const handleChangeTitle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      onNodeChange({ ...entity, title: value });
    },
    [onNodeChange, entity]
  );

  const handleChangeTags = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onNodeChange({ ...entity, tags: event.currentTarget.value });
    },
    [onNodeChange, entity]
  );

  return (
    <>
      <div>
        <label>
          Title: <input type="text" value={entity.title} onChange={handleChangeTitle} />
        </label>
      </div>
      <div>
        <label>
          Tags: <input type="text" value={entity.tags} onChange={handleChangeTags} />
        </label>
      </div>
    </>
  );
};
