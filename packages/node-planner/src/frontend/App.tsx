import React from 'react';

import { FrontendPlanner } from './FrontendPlanner';
import { StoreProvider } from '../ui/StoreProvider';

export const App = () => (
  <StoreProvider>
    <FrontendPlanner />
  </StoreProvider>
);
