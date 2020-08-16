import { useQuery } from 'react-query';

import { READ_ALL_LOCATIONS, ReadAllLocationsResponse } from '@sh/config-node-location';

export const useAllLocations = () => {
  const { data, ...rest } = useQuery(
    READ_ALL_LOCATIONS,
    (): Promise<ReadAllLocationsResponse> =>
      fetch(READ_ALL_LOCATIONS, { credentials: 'same-origin' }).then(response => response.json()) as any
  );

  return {
    data: (data || []).map(({ label, id }) => ({ label, value: id })),
    ...rest,
  };
};
