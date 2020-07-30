import React, { FunctionComponent } from 'react';
import { ReactPlanner, Plugins as PlannerPlugins, catalog } from 'react-planner';
import ContainerDimensions from 'react-container-dimensions';

import { WebSocketListener } from '../WebSocketListener';

const plugins = [PlannerPlugins.Keyboard()];

interface PlannerProps {}

export const Planner: FunctionComponent<PlannerProps> = () => {
  return (
    <ContainerDimensions>
      {({ width, height }) => (
        <>
          <WebSocketListener />
          <ReactPlanner
            catalog={catalog}
            width={width}
            height={height}
            plugins={plugins}
            stateExtractor={state => state.get('react-planner')}
          />
        </>
      )}
    </ContainerDimensions>
  );
};
