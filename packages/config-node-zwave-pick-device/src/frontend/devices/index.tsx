import React, { FunctionComponent, useCallback, ChangeEvent } from 'react';

import * as fibaro from './fibaro';

interface Values {
  [key: string]: string | number | undefined;
}

interface DeviceConfigProps {
  device?: string;
  values: Values;
  onChange: (key: string, value: string | number | undefined) => void;
}

export const DeviceConfig: FunctionComponent<DeviceConfigProps> = ({ device, values, onChange }) => {
  const handleInputChange = useCallback(
    ({ target }: ChangeEvent<HTMLInputElement>) => {
      if (target.dataset.name) {
        onChange(target.dataset.name, target.value);
      }
    },
    [onChange]
  );

  switch (device) {
    case 'fibaroFGWDS221':
      return <fibaro.WalliDoubleSwitch values={values} onInputChange={handleInputChange} />;
    case 'fibaroFGWD111':
      return <fibaro.WalliDimmer values={values} onInputChange={handleInputChange} />;
    default:
      return null;
  }
};
