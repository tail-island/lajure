import assert from 'assert';
import {interleave, range} from '../src';

describe('test interleave', () => {
  it('collection', () => {
    const iter = interleave(range(2), range(2, 4), range(4, 6));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 4);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 5);

    assert(iter.next().done);
  });

  it('infinit collection', () => {
    const iter = interleave(range(), range(2, 4), range(4, 6));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 4);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 5);

    assert(iter.next().done);
  });

  it('empty collection', () => {
    const iter = interleave(range(0), range(2, 4), range(4, 6));

    assert(iter.next().done);
  });
});
