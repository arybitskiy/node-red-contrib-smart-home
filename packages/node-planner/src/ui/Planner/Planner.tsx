import React, { FunctionComponent } from 'react';
import { ReactPlanner, Plugins as PlannerPlugins, catalog } from 'react-planner';
import ReactResizeDetector from 'react-resize-detector';

import { WebSocketListener } from '../WebSocketListener';

const plugins = [PlannerPlugins.Keyboard()];

const style = { width: '100%', height: '100%' };

interface PlannerProps {}

export const Planner: FunctionComponent<PlannerProps> = () => {
  return (
    <>
      <WebSocketListener />
      <ReactResizeDetector handleWidth handleHeight>
        {({ width, height }) => (
          <div style={style}>
            {width && height && (
              <ReactPlanner
                catalog={catalog}
                width={width}
                height={height}
                plugins={plugins}
                stateExtractor={state => state.get('react-planner')}
              />
            )}
          </div>
        )}
      </ReactResizeDetector>
    </>
  );
};
