import { getDeviceIdFromName } from './utils';
import { ON, OFF } from './constants';

interface GetSwitchMQTTConfigMessageParams {
  name: string;
  manufacturer: string;
  model: string;
  identifiers: string[] | string;
}

interface GetSwitchMQTTStateMessageParams {
  name: string;
  state: boolean;
}

export const getSwitchMQTTTopic = (deviceId: string) => `homeassistant/switch/${getDeviceIdFromName(deviceId)}`;

export const getSwitchMQTTConfigMessage = ({
  name,
  manufacturer,
  model,
  identifiers,
}: GetSwitchMQTTConfigMessageParams) => ({
  topic: `${getSwitchMQTTTopic(name)}/config`,
  payload: {
    command_topic: '~/set',
    state_topic: '~/state',
    schema: 'json',
    device: {
      manufacturer,
      model,
      name,
      identifiers,
    },
    '~': getSwitchMQTTTopic(name),
    name,
    unique_id: `switch_${getDeviceIdFromName(name)}`,
  },
});

export const getSwitchMQTTStateMessage = ({ name, state }: GetSwitchMQTTStateMessageParams) => ({
  topic: `${getSwitchMQTTTopic(name)}/state`,
  payload: { state: state ? ON : OFF },
});
