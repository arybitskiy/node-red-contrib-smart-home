import { forEach } from 'lodash';

import type { NodeValue } from '@sh/config-node-zwave-pick-device';

import { DELAY_BEFORE_SENDING_NEW_VALUE, TIMEOUT_SEND_VALUE } from './constants';
import { getQueueItemHash, getValuePathHash, getNodeValueKey } from './utils';
import type { ConfigNodeZwavePickDeviceBackend, NodeContextValue } from '../../types';
import type { QueueItem, ValuesProcessorConfig, ValuePath } from './types';

export class ValuesProcessor {
  private node: ConfigNodeZwavePickDeviceBackend;

  private queue: { [queueItemHash: string]: QueueItem };

  private processing: { [queueItemHash: string]: boolean };

  private timeLastReceivedValue: { [valuePathHash: string]: number };

  private timeouts: { [queueItemHash: string]: number };

  constructor({ node }: ValuesProcessorConfig) {
    this.node = node;
    this.queue = {};
    this.processing = {};
    this.timeLastReceivedValue = {};
    this.timeouts = {};
  }

  destroy() {
    delete this.node;
    delete this.queue;
    delete this.processing;
    delete this.timeLastReceivedValue;
    Object.keys(this.timeouts).forEach(queueItemHash => clearTimeout(this.timeouts[queueItemHash]));
    delete this.timeouts;
  }

  sendAndExpect(
    sendValuePath: ValuePath,
    sendValue: NodeValue,
    expectValueParam?: NodeValue,
    expectValuePathParam?: ValuePath
  ) {
    const expectValue = typeof expectValueParam === 'undefined' ? sendValue : expectValueParam;
    const expectValuePath = typeof expectValuePathParam === 'undefined' ? sendValuePath : expectValuePathParam;

    const queueItem = {
      sendValuePath,
      expectValuePath,
      sendValue,
      expectValue,
    };
    this.queue[getQueueItemHash(queueItem)] = queueItem;

    this.process();
  }

  private process() {
    const queue = { ...this.queue };
    forEach(queue, (queueItem, queueItemHash) => {
      if (!this.getIsProcessing(queueItemHash)) {
        this.setIsProcessing(queueItemHash);
        this.processQueueItem(queueItem).catch(console.error);
      }
    });
  }

  private async processQueueItem(queueItem: QueueItem) {
    const queueItemHash = getQueueItemHash(queueItem);
    delete this.queue[queueItemHash];

    const { sendValuePath, sendValue, expectValuePath, expectValue } = queueItem;
    const nodeValueKey = getNodeValueKey(expectValuePath);
    const currentExpectedValue = await this.node.getValue(
      expectValuePath.commandClassId,
      expectValuePath.instanceId,
      expectValuePath.valueId
    );

    if (currentExpectedValue === expectValue) {
      this.unsetIsProcessing(queueItemHash);
      this.process();
      return;
    }

    const timeToWait = this.getTimeToWaitNextSend(queueItem.expectValuePath);

    this.timeouts[queueItemHash] = setTimeout(() => {
      const timeoutSendingValue = setTimeout(() => {
        this.node.off(nodeValueKey, listenForChange);
        this.unsetIsProcessing(queueItemHash);
        console.error('Timeout sending value');
        if (!(queueItemHash in this.queue)) {
          console.log('Resending value');
          this.queue[queueItemHash] = queueItem;
        }
        this.process();
      }, TIMEOUT_SEND_VALUE);
      const listenForChange = ({ payload }: { payload: NodeContextValue }) => {
        this.timeLastReceivedValue[getValuePathHash(expectValuePath)] = Date.now();
        clearTimeout(timeoutSendingValue);
        this.unsetIsProcessing(queueItemHash);
        if (payload.value !== expectValue) {
          this.sendAndExpect(sendValuePath, sendValue, expectValue, expectValuePath);
        } else {
          this.process();
        }
      };

      this.node.once(nodeValueKey, listenForChange);

      this.node
        .sendValue(sendValuePath.commandClassId, sendValuePath.instanceId, sendValuePath.valueId, sendValue)
        .catch(error => {
          console.error(error);
          clearTimeout(timeoutSendingValue);
          this.node.off(nodeValueKey, listenForChange);
        });
    }, timeToWait);
  }

  private getTimeToWaitNextSend(valuePath: ValuePath) {
    const valuePathHash = getValuePathHash(valuePath);
    if (!(valuePathHash in this.timeLastReceivedValue)) {
      return 0;
    }

    const timeToWait = this.timeLastReceivedValue[valuePathHash] + DELAY_BEFORE_SENDING_NEW_VALUE - Date.now();

    return timeToWait < 0 ? 0 : timeToWait;
  }

  private getIsProcessing(queueItemHash: string | QueueItem) {
    return this.processing[typeof queueItemHash === 'string' ? queueItemHash : getQueueItemHash(queueItemHash)];
  }

  private setIsProcessing(queueItemHash: string | QueueItem) {
    this.processing[typeof queueItemHash === 'string' ? queueItemHash : getQueueItemHash(queueItemHash)] = true;
  }

  private unsetIsProcessing(queueItemHash: string | QueueItem) {
    delete this.processing[typeof queueItemHash === 'string' ? queueItemHash : getQueueItemHash(queueItemHash)];
  }
}
