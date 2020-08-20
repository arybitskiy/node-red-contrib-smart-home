import { noop } from 'lodash';
import * as NodeRed from 'node-red';

import * as fibaro from './fibaro';
import type { ConfigNodeZwavePickDeviceBackend } from '../types';
import { DEBUG } from '../constants';

export const setupDevice = (node: ConfigNodeZwavePickDeviceBackend, RED: NodeRed.Red): Promise<() => void> =>
  new Promise(resolve => {
    DEBUG && console.log('device: ', node.device);
    setTimeout(() => {
      switch (node.device) {
        case 'fibaroFGWDS221':
          return resolve(fibaro.FibaroWalliDoubleSwitch(node, RED));
        case 'fibaroFGWD111':
          return resolve(fibaro.FibaroWalliDimmer(node, RED));
        default:
          return resolve(noop);
      }
    }, 3000);
  });
