import assert from 'assert';
import {partitionBy} from '../src';

describe('test partitionAll', () => {
  it('partitioning', () => {
    const iter = partitionBy(x => x % 2 === 0, [1, 1, 1, 2, 2, 3, 3, 4]);

    assert.deepStrictEqual(iter.next().value, [1, 1, 1]);
    assert.deepStrictEqual(iter.next().value, [2, 2]);
    assert.deepStrictEqual(iter.next().value, [3, 3]);
    assert.deepStrictEqual(iter.next().value, [4]);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = partitionBy(x => x % 2 === 0, null);

    assert(iter.next().done);
  });
});
