import assert from 'assert';
import {sequence, sortBy} from '../src';

describe('test sortBy', () => {
  it('sort', () => {
    const iter = sortBy(x => x[1], sequence([['a', 3], ['b', 2], ['c', 1]]));

    assert.deepStrictEqual(iter.next().value, ['c', 1]);
    assert.deepStrictEqual(iter.next().value, ['b', 2]);
    assert.deepStrictEqual(iter.next().value, ['a', 3]);

    assert(iter.next().done);
  });

  it('sort with comp', () => {
    const iter = sortBy(x => x[1], (x, y) => x > y, sequence([['c', 1], ['b', 2], ['a', 3]]));

    assert.deepStrictEqual(iter.next().value, ['a', 3]);
    assert.deepStrictEqual(iter.next().value, ['b', 2]);
    assert.deepStrictEqual(iter.next().value, ['c', 1]);

    assert(iter.next().done);
  });
});
