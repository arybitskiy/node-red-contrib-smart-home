import React, { FunctionComponent, useState, useCallback } from 'react';
import Modal from 'react-modal';

import { WebSocketListener } from '@sh/node-planner';

import { GraphEditor } from './GraphEditor';

const getInput = () => {
  const input = document.getElementById('node-input-graph') as HTMLInputElement;
  if (!input) {
    throw new Error('Input not exists');
  }
  return input;
};

const readGraph = () => {
  try {
    return JSON.parse(getInput().value);
  } catch (e) {
    return { nodes: [], edges: [] };
  }
};

const writeGraph = graph => {
  getInput().value = JSON.stringify(graph);
};

const styles = { overlay: { zIndex: 1000 }, content: { padding: 0, overflow: 'none' } };

interface AppProps {}

export const App: FunctionComponent<AppProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [graph, setGraph] = useState(readGraph());

  const handleModalOpen = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    writeGraph(graph);
  }, [setIsModalOpen, graph]);

  return (
    <>
      <WebSocketListener />
      <button onClick={handleModalOpen}>Open Editor</button>
      <Modal
        style={styles}
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        shouldCloseOnEsc={false}
        ariaHideApp={false}
      >
        {isModalOpen && <GraphEditor graph={graph} onChange={setGraph} />}
      </Modal>
    </>
  );
};
