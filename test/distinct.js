import assert from 'assert';
import {distinct} from '../src';

describe('test distinct', () => {
  it('duplicated values', () => {
    const iter = distinct([1, 3, 1, 2, 1, 3]);

    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 2);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = distinct(null);

    assert(iter.next().done);
  });
});
