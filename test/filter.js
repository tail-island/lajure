import assert from 'assert';
import {filter, range} from '../src';

describe('test filter', () => {
  it('filtering', () => {
    const iter = filter(x => x % 2 == 0, range(6));

    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 2);
    assert.equal(iter.next().value, 4);

    assert(iter.next().done);
  });
});
