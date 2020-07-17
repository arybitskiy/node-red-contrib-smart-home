import helper from 'node-red-node-test-helper';

import CommonUiBackend from '../common-ui-backend';

describe('common-ui-backend', () => {
  afterEach(function () {
    helper.unload();
  });

  it('returns same message', function (done) {
    const originalMessage = {
      topic: 'test',
      payload: 'payload',
    };
    const flow = [
      { id: 'n1', type: 'common-ui', name: 'test name', wires: [['n2']] },
      { id: 'n2', type: 'helper' },
    ];
    helper.load(CommonUiBackend, flow, function () {
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
