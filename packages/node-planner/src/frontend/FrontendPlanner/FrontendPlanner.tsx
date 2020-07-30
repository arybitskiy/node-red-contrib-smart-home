import React, { FunctionComponent, useState, useCallback } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import { Planner } from '../../ui/Planner';
import type { StoreState } from '../../ui/StoreProvider';

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

interface FrontendPlannerProps {}

export const FrontendPlanner: FunctionComponent<FrontendPlannerProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleModalOpen = useCallback(() => {
    const scene = getScene();
    if (scene) {
      dispatch({
        type: 'LOAD_PROJECT',
        sceneJSON: scene,
      });
    }
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    const json = useSelector((state: StoreState) => state.get('react-planner').get('scene').toJSON());
    saveScene(json);
  }, [setIsModalOpen]);

  return (
    <>
      <button onClick={handleModalOpen}>Open Editor</button>
      <Modal style={styles} isOpen={isModalOpen} onRequestClose={handleModalClose} shouldCloseOnEsc={false}>
        <Planner />
      </Modal>
    </>
  );
};
