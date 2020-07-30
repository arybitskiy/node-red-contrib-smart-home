import useWebsocket from 'react-use-websocket';
import { useDispatch } from 'react-redux';

import { WEBSOCKET_PATH, WebSocketMessageType } from '@sh/config-node-zwave-pick-device';

import { ActionTypes } from './types';

export const WebSocketListener = () => {
  const dispatch = useDispatch();
  const { lastJsonMessage } = useWebsocket(location.origin.replace(/^http/, 'ws') + WEBSOCKET_PATH, {
    share: true,
    shouldReconnect: () => true,
  });

  if (lastJsonMessage) {
    switch (lastJsonMessage.type) {
      case WebSocketMessageType.ALL_VALUES:
        dispatch({ type: ActionTypes.LOADED_ALL_VALUES, nodes: lastJsonMessage.nodes });
        break;
      case WebSocketMessageType.VALUE_CHANGED:
        dispatch({
          type: ActionTypes.VALUE_CHANGED,
          nodeId: lastJsonMessage.nodeId,
          valueKey: lastJsonMessage.valueKey,
          value: lastJsonMessage.value,
        });
        break;
    }
  }

  return null;
};
