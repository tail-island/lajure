import assert from 'assert';
import {partitionAll, range} from '../src';

describe('test partitionAll', () => {
  it('partitioning', () => {
    const iter = partitionAll(2, range(6));

    assert.deepStrictEqual(iter.next().value, [0, 1]);
    assert.deepStrictEqual(iter.next().value, [2, 3]);
    assert.deepStrictEqual(iter.next().value, [4, 5]);

    assert(iter.next().done);
  });

  it('partitioning', () => {
    const iter = partitionAll(2, range(7));

    assert.deepStrictEqual(iter.next().value, [0, 1]);
    assert.deepStrictEqual(iter.next().value, [2, 3]);
    assert.deepStrictEqual(iter.next().value, [4, 5]);
    assert.deepStrictEqual(iter.next().value, [6]);

    assert(iter.next().done);
  });

  it('partitioning with step', () => {
    const iter = partitionAll(2, 3, range(10));

    assert.deepStrictEqual(iter.next().value, [0, 1]);
    assert.deepStrictEqual(iter.next().value, [3, 4]);
    assert.deepStrictEqual(iter.next().value, [6, 7]);
    assert.deepStrictEqual(iter.next().value, [9]);

    assert(iter.next().done);
  });

  it('partitioning with small step', () => {
    const iter = partitionAll(3, 2, range(8));

    assert.deepStrictEqual(iter.next().value, [0, 1, 2]);
    assert.deepStrictEqual(iter.next().value, [2, 3, 4]);
    assert.deepStrictEqual(iter.next().value, [4, 5, 6]);
    assert.deepStrictEqual(iter.next().value, [6, 7]);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = partitionAll(2, null);

    assert(iter.next().done);
  });
});
