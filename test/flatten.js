import assert from 'assert';
import {flatten, range} from '../src';

describe('test flatten', () => {
  it('flat items', () => {
    const iter = flatten([1, 2, [3, 4, [5, 6], 7], 8]);

    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 4);
    assert.strictEqual(iter.next().value, 5);
    assert.strictEqual(iter.next().value, 6);
    assert.strictEqual(iter.next().value, 7);
    assert.strictEqual(iter.next().value, 8);

    assert(iter.next().done);
  });

  it('flat not collection', () => {
    const iter = flatten(1);

    assert(iter.next().done);
  });
});
