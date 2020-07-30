import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Planner } from './Planner';
import { ActionTypes } from './types';

const getCache = () => {
  try {
    // @ts-ignore
    return window.__CACHE__;
  } catch (e) {
    return null;
  }
};

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cache = getCache();
    if (cache.planner) {
      dispatch({
        type: 'LOAD_PROJECT',
        sceneJSON: cache.planner,
      });
    }
    if (cache.nodes) {
      dispatch({
        type: ActionTypes.LOADED_ALL_VALUES,
        nodes: cache.nodes,
      });
    }
  });

  return <Planner />;
};
