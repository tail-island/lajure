import assert from 'assert';
import {repeat} from '../src';

describe('test repeat', () => {
  it('repeating x infinitely', () => {
    const iter = repeat(1);

    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 1);

    assert(!iter.next().done);
  });

  it('repeating x n times', () => {
    const iter = repeat(3, 1);

    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 1);

    assert(iter.next().done);
  });
});
