import React, { FunctionComponent, useCallback } from 'react';
import Select from 'react-select';

import { useAllLocations } from '../hooks';

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'black' : 'grey',
  }),
};

type Value = string | undefined;

interface LocationsNodeSelectProps {
  value?: Value;
  onChange: (value?: Value) => void;
}

export const LocationsNodeSelect: FunctionComponent<LocationsNodeSelectProps> = ({ value, onChange }) => {
  const { isLoading, data } = useAllLocations();

  const handleChange = useCallback(
    val => {
      onChange(val ? val.value : undefined);
    },
    [onChange]
  );

  return (
    <Select
      isLoading={isLoading}
      options={data}
      styles={customStyles}
      value={data.find(option => value && value === option.value)}
      onChange={handleChange}
    />
  );
};
