import helper from 'node-red-node-test-helper';

import NodeZwaveDeviceInBackend from '../node-zwave-device-in-backend';

describe('node-zwave-device-in-backend', () => {
  afterEach(function () {
    helper.unload();
  });

  it('returns same message', function (done) {
    const originalMessage = {
      topic: 'test',
      payload: 'payload',
    };
    const flow = [
      { id: 'n1', type: 'node-zwave-device-in', name: 'test name', wires: [['n2']] },
      { id: 'n2', type: 'helper' },
    ];
    helper.load(NodeZwaveDeviceInBackend, flow, function () {
      const n2 = helper.getNode('n2');
      const n1 = helper.getNode('n1');
      n2.on('input', function (msg) {
        msg.should.equal(originalMessage);
        done();
      });
      n1.receive(originalMessage);
    });
  });
});
