import assert from 'assert';
import {maxKey} from '../src';

describe('test maxKey', () => {
  it('max by key', () => {
    assert.equal(maxKey(x => x, 1, 2, 3), 3);
    assert.deepEqual(maxKey(x => x[1], [3, 1], [2, 2], [1, 3]), [1, 3]);
    assert.deepEqual(maxKey(x => x, 1), 1);
  });
});
