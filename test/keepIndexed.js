import assert from 'assert';
import {keepIndexed, range} from '../src';

describe('test keepIndexed', () => {
  it('keeping', () => {
    const iter = keepIndexed((i, x) => i % 2 == 0 ? x * 2 : null, range(1, 6));

    assert.equal(iter.next().value,  2);
    assert.equal(iter.next().value,  6);
    assert.equal(iter.next().value, 10);

    assert(iter.next().done);
  });
});
