import assert from 'assert';
import {concat} from '../src';

describe('test concat', () => {
  it('concatenate', () => {
    const iter = concat([0, 1], [2, 3]);

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 3);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = concat([0, 1], null, [2, 3]);

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 3);

    assert(iter.next().done);
  });
});
