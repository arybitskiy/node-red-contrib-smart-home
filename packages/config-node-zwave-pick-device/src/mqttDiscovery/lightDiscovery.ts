import { getDeviceIdFromName } from './utils';
import { ON, OFF } from './constants';

interface GetLightMQTTConfigMessageParams {
  name: string;
  deviceName: string;
  manufacturer: string;
  model: string;
  identifiers: string[] | string;
}

interface GetLightMQTTStateMessageParams {
  name: string;
  state: boolean;
}

export const getLightMQTTTopic = (deviceId: string) => `homeassistant/light/${getDeviceIdFromName(deviceId)}`;

export const getLightMQTTConfigMessage = ({
  name,
  deviceName,
  manufacturer,
  model,
  identifiers,
}: GetLightMQTTConfigMessageParams) => ({
  topic: `${getLightMQTTTopic(name)}/config`,
  payload: {
    command_topic: '~/set',
    state_topic: '~/state',
    schema: 'json',
    device: {
      manufacturer,
      model,
      name: deviceName,
      identifiers,
    },
    '~': getLightMQTTTopic(name),
    name,
    unique_id: `light_${getDeviceIdFromName(name)}`,
  },
});

export const getLightMQTTStateMessage = ({ name, state }: GetLightMQTTStateMessageParams) => ({
  topic: `${getLightMQTTTopic(name)}/state`,
  payload: { state: state ? ON : OFF },
});
