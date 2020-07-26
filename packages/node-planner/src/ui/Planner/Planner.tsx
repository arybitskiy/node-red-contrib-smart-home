import React, { FunctionComponent } from 'react';
import { Map } from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  Models as PlannerModels,
  reducer as PlannerReducer,
  ReactPlanner,
  Plugins as PlannerPlugins,
  catalog,
} from 'react-planner';
import ContainerDimensions from 'react-container-dimensions';

const getScene = () => {
  try {
    // @ts-ignore
    return window.__CACHE__.planner;
  } catch (e) {
    return null;
  }
};

//define state
const AppState = Map({
  'react-planner': new PlannerModels.State(),
});

//define reducer
const reducer = (state, action) => {
  state = state || AppState;
  state = state.update('react-planner', plannerState => PlannerReducer(plannerState, action));
  return state;
};

const store = createStore(reducer, undefined);

const scene = getScene();
console.log('scene: ', scene);
if (scene) {
  store.dispatch({
    type: 'LOAD_PROJECT',
    sceneJSON: scene,
  });
}

const plugins = [PlannerPlugins.Keyboard()];

interface PlannerProps {}

export const Planner: FunctionComponent<PlannerProps> = () => {
  return (
    <Provider store={store}>
      <ContainerDimensions>
        {({ width, height }) => (
          <ReactPlanner
            catalog={catalog}
            width={width}
            height={height}
            plugins={plugins}
            stateExtractor={state => state.get('react-planner')}
          />
        )}
      </ContainerDimensions>
    </Provider>
  );
};
