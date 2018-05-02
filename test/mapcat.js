import assert from 'assert';
import {mapcat, range} from '../src';

describe('test mapcat', () => {
  it('one coll', () => {
    const iter = mapcat(x => [x, x], range(3));

    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 2);
    assert.equal(iter.next().value, 2);

    assert(iter.next().done);
  });
});
