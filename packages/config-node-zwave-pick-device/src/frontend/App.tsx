import React, { FunctionComponent } from 'react';

interface AppProps {
  device?: string;
}

export const App: FunctionComponent<AppProps> = ({ device }) => <div>{device || ''}</div>;
