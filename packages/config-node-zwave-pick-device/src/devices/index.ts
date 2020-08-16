import { noop } from 'lodash';
import * as NodeRed from 'node-red';

import * as fibaro from './fibaro';
import type { ConfigNodeZwavePickDeviceBackend } from '../types';
import { DEBUG } from '../constants';

export const setupDevice = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red) => {
  DEBUG && console.log('device: ', node.device);
  switch (node.device) {
    case 'fibaroFGWDS221':
      return fibaro.FibaroWalliDoubleSwitch(node, RED);
    default:
      return noop;
  }
};
