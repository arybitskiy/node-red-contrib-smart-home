import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';

import { App } from './App';
import { StoreProvider } from './StoreProvider';

const ROOT_NODE = document.getElementById('root');
ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  ROOT_NODE
);
