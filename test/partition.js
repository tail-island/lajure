import assert from 'assert';
import {partition, range} from '../src';

describe('test partition', () => {
  it('partitioning', () => {
    const iter = partition(2, range(7));

    assert.deepStrictEqual(iter.next().value, [0, 1]);
    assert.deepStrictEqual(iter.next().value, [2, 3]);
    assert.deepStrictEqual(iter.next().value, [4, 5]);

    assert(iter.next().done);
  });

  it('partitioning with step', () => {
    const iter = partition(2, 3, range(9));

    assert.deepStrictEqual(iter.next().value, [0, 1]);
    assert.deepStrictEqual(iter.next().value, [3, 4]);
    assert.deepStrictEqual(iter.next().value, [6, 7]);

    assert(iter.next().done);
  });

  it('partitioning with small step', () => {
    const iter = partition(3, 2, range(8));

    assert.deepStrictEqual(iter.next().value, [0, 1, 2]);
    assert.deepStrictEqual(iter.next().value, [2, 3, 4]);
    assert.deepStrictEqual(iter.next().value, [4, 5, 6]);

    assert(iter.next().done);
  });

  it('partitioning with pad', () => {
    const iter = partition(3, 3, [8, 9], range(7));

    assert.deepStrictEqual(iter.next().value, [0, 1, 2]);
    assert.deepStrictEqual(iter.next().value, [3, 4, 5]);
    assert.deepStrictEqual(iter.next().value, [6, 8, 9]);

    assert(iter.next().done);
  });

  it('partitioning with small pad', () => {
    const iter = partition(3, 3, [8], range(7));

    assert.deepStrictEqual(iter.next().value, [0, 1, 2]);
    assert.deepStrictEqual(iter.next().value, [3, 4, 5]);
    assert.deepStrictEqual(iter.next().value, [6, 8]);

    assert(iter.next().done);
  });

  it('partitioning with big pad', () => {
    const iter = partition(3, 3, [8, 9, 10], range(7));

    assert.deepStrictEqual(iter.next().value, [0, 1, 2]);
    assert.deepStrictEqual(iter.next().value, [3, 4, 5]);
    assert.deepStrictEqual(iter.next().value, [6, 8, 9]);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = partition(2, null);

    assert(iter.next().done);
  });
});
