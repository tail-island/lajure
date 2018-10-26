import assert from 'assert';
import {rseq} from '../src';

describe('test rseq', () => {
  it('reverse sequencing', () => {
    const iter = rseq([0, 1, 2]);

    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 0);

    assert(iter.next().done);
  });
});
