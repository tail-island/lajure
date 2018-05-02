import assert from 'assert';
import {distinct} from '../src';

describe('test distinct', () => {
  it('duplicated values', () => {
    const iter = distinct([1, 3, 1, 2, 1, 3]);

    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 3);
    assert.equal(iter.next().value, 2);

    assert(iter.next().done);
  });
});
