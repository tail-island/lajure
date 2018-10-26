import assert from 'assert';
import {nfirst, range} from '../src';

describe('test nfirst', () => {
  it('next of first', () => {
    const iter = nfirst([[0, 1, 2], [3, 4, 5]]);

    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);

    assert(iter.next().done);

    assert.strictEqual(nfirst([]),   null);
    assert.strictEqual(nfirst(null), null);
  });
});
