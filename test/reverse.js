import assert from 'assert';
import {range, reverse} from '../src';

describe('test reverse', () => {
  it('reversing', () => {
    const iter = reverse(range(3));

    assert.equal(iter.next().value, 2);
    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 0);

    assert(iter.next().done);
  });
});
