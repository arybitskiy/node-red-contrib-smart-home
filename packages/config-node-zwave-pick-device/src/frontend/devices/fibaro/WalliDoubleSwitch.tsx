import React, { FunctionComponent, ChangeEvent } from 'react';

interface Values {
  [key: string]: string | number | undefined;
}

interface WalliDoubleSwitchProps {
  values: Values;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const WalliDoubleSwitch: FunctionComponent<WalliDoubleSwitchProps> = ({ values, onInputChange }) => (
  <>
    <div>
      <label>HA Discovery:</label>
      <input type="text" data-name="ha_discovery" value={values.ha_discovery} onChange={onInputChange} />
    </div>
    <div>
      <label>Manual Mode:</label>
      <input type="text" data-name="manual_mode" value={values.manual_mode} onChange={onInputChange} />
    </div>
    <div>
      <label>Device Name:</label>
      <input type="text" data-name="device_name" value={values.device_name} onChange={onInputChange} />
    </div>
    <fieldset>
      <legend>First</legend>
      <div>
        <label>Name:</label>
        <input type="text" data-name="first_name" value={values.first_name} onChange={onInputChange} />
      </div>
    </fieldset>
    <fieldset>
      <legend>Second</legend>
      <div>
        <label>Name:</label>
        <input type="text" data-name="second_name" value={values.second_name} onChange={onInputChange} />
      </div>
    </fieldset>
  </>
);
