import React, { FunctionComponent, useState, useCallback } from 'react';
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
import Modal from 'react-modal';
import ContainerDimensions from 'react-container-dimensions';

const getInput = () => {
  const input = document.getElementById('node-input-planner') as HTMLInputElement;
  if (!input) {
    throw new Error('Input not exists');
  }
  return input;
};

const getScene = () => {
  try {
    return JSON.parse(getInput().value);
  } catch (e) {
    return null;
  }
};

const saveScene = scene => {
  getInput().value = JSON.stringify(scene);
};

const styles = { overlay: { zIndex: 1000 }, content: { padding: 0, overflow: 'none' } };

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

const plugins = [PlannerPlugins.Keyboard()];

interface PlannerProps {}

export const Planner: FunctionComponent<PlannerProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = useCallback(() => {
    const scene = getScene();
    if (scene) {
      store.dispatch({
        type: 'LOAD_PROJECT',
        sceneJSON: scene,
      });
    }
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    const json = store.getState().get('react-planner').get('scene').toJSON();
    saveScene(json);
  }, [setIsModalOpen]);

  return (
    <Provider store={store}>
      <button onClick={handleModalOpen}>Open Editor</button>
      <Modal style={styles} isOpen={isModalOpen} onRequestClose={handleModalClose} shouldCloseOnEsc={false}>
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
      </Modal>
    </Provider>
  );
};
