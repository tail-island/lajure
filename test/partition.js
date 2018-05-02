import assert from 'assert';
import {partition, range} from '../src';

describe('test partition', () => {
  it('partitioning', () => {
    const iter = partition(2, range(7));

    assert.equal(iter.next().value.toString(), [0, 1].toString());
    assert.equal(iter.next().value.toString(), [2, 3].toString());
    assert.equal(iter.next().value.toString(), [4, 5].toString());

    assert(iter.next().done);
  });
});
