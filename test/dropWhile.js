import assert from 'assert';
import {concat, dropWhile, range} from '../src';

describe('test dropWhile', () => {
  it('dropped values', () => {
    const iter = dropWhile(x => x < 0, concat(range(-2, 2), [-1]));

    assert.strictEqual(iter.next().value,  0);
    assert.strictEqual(iter.next().value,  1);
    assert.strictEqual(iter.next().value, -1);

    assert(iter.next().done);
  });

  it('empty result', () => {
    const iter = dropWhile(x => x < 0, range(-2, 0));

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = dropWhile(x => x < 0, null);

    assert(iter.next().done);
  });
});
