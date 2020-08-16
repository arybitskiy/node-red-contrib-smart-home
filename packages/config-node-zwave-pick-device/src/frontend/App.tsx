import React, { FunctionComponent, useState, useCallback, useEffect } from 'react';

import { DeviceConfig } from './devices';

const getInput = () => {
  const input = document.getElementById('node-config-input-configuration') as HTMLInputElement;
  if (!input) {
    throw new Error('Input not exists');
  }
  return input;
};

const readConfig = () => {
  try {
    return JSON.parse(getInput().value);
  } catch (e) {
    return {};
  }
};

const writeConfig = config => {
  getInput().value = JSON.stringify(config);
};

interface AppProps {
  device?: string;
}

export const App: FunctionComponent<AppProps> = ({ device }) => {
  const [currentDevice, setCurrentDevice] = useState(device);
  const [values, setValues] = useState(readConfig());

  const handleChange = useCallback(
    (key: string, value: string | number | undefined) => {
      setValues(currentValues => ({
        ...currentValues,
        [key]: value,
      }));
    },
    [setValues]
  );

  useEffect(() => {
    if (device && device !== currentDevice) {
      setCurrentDevice(device);
      setValues({});
    }
  }, [currentDevice, device, setCurrentDevice]);

  useEffect(() => {
    writeConfig(values);
  }, [values]);

  return <DeviceConfig device={device} values={values} onChange={handleChange} />;
};
