import assert from 'assert';
import {map, range} from '../src';

describe('test map', () => {
  it('one coll', () => {
    const iter = map(x => x * 2, range(3));

    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 2);
    assert.equal(iter.next().value, 4);

    assert(iter.next().done);
  });

  it('colls', () => {
    const iter = map((x, y) => x * y, range(), range(1, 4));

    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 2);
    assert.equal(iter.next().value, 6);

    assert(iter.next().done);
  });
});
