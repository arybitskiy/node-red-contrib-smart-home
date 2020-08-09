import React, { FunctionComponent, useCallback, ChangeEvent } from 'react';
import { Map } from 'immutable';
import { mapValues } from 'lodash';

import { PropertyCondition } from 'react-planner';

import type { NodeMotionSensor, NodeOpenLockSensor } from '../types';

interface SensorEditorProps {
  entity: NodeMotionSensor | NodeOpenLockSensor;
  onNodeChange: (node: NodeMotionSensor | NodeOpenLockSensor) => void;
}

export const SensorEditor: FunctionComponent<SensorEditorProps> = ({ entity, onNodeChange }) => {
  const handleChangeTitle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      onNodeChange({ ...entity, title: value });
    },
    [onNodeChange, entity]
  );

  const handleChangeCondition = useCallback(
    condition => {
      onNodeChange({ ...entity, condition });
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
        <PropertyCondition
          configs={{ label: entity.type }}
          value={
            Map.isMap(entity.condition) ? entity.condition : Map(mapValues(entity.condition, val => Map(val)) as any)
          }
          onUpdate={handleChangeCondition}
        />
      </div>
    </>
  );
};
