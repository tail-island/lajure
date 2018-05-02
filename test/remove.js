import assert from 'assert';
import {range, remove} from '../src';

describe('test remove', () => {
  it('removing', () => {
    const iter = remove(x => x % 2 == 0, range(6));

    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 3);
    assert.equal(iter.next().value, 5);

    assert(iter.next().done);
  });
});
