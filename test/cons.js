import assert from 'assert';
import {cons, range} from '../src';

describe('test cons', () => {
  it('constructing', () => {
    const iter = cons(0, range(1, 3));

    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 2);

    assert(iter.next().done);
  });
});
