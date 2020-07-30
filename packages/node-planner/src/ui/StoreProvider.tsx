import React, { FunctionComponent, ReactNode } from 'react';
import { Map } from 'immutable';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Models as PlannerModels, reducer as PlannerReducer } from 'react-planner';
import { mapValues } from 'lodash';

import { ActionTypes } from './types';

//define state
const AppState = Map({
  'react-planner': new PlannerModels.State(),
  nodes: Map({}),
});

export type StoreState = typeof AppState;

//define reducer
const reducer = (state: StoreState, action) => {
  state = state || AppState;
  state = state.update('react-planner', plannerState => PlannerReducer(plannerState, action));

  switch (action.type) {
    case ActionTypes.LOADED_ALL_VALUES:
      return state.set('nodes', Map(mapValues(action.nodes, val => Map(val))));
    case ActionTypes.VALUE_CHANGED:
      return state.setIn(['nodes', action.nodeId.toString(), action.valueKey], action.value);
  }

  return state;
};

const store = createStore(reducer as any, undefined);

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: FunctionComponent<StoreProviderProps> = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);
