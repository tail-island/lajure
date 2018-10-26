import assert from 'assert';
import {mapIndexed, range} from '../src';

describe('test mapIndexed', () => {
  it('mapping', () => {
    const iter = mapIndexed(Array.of, range(1, 4));

    assert.deepStrictEqual(iter.next().value, [0, 1]);
    assert.deepStrictEqual(iter.next().value, [1, 2]);
    assert.deepStrictEqual(iter.next().value, [2, 3]);

    assert(iter.next().done);
  });
});
