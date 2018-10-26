import assert from 'assert';
import {range, reverse} from '../src';

describe('test reverse', () => {
  it('reversing', () => {
    const iter = reverse(range(3));

    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 0);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = reverse(null);

    assert(iter.next().done);
  });
});
