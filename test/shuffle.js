import assert from 'assert';
import {range, reduce, remove, shuffle} from '../src';

describe('test shuffle', () => {
  it('shuffle', () => {
    const iter1 = shuffle(range(5));
    const iter2 = reduce((acc, x) => remove(y => y === x, acc), range(5), iter1);

    assert(iter2.next().done);
  });
});
