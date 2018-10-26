import assert from 'assert';
import {minKey} from '../src';

describe('test minKey', () => {
  it('min by key', () => {
    assert.strictEqual(minKey(x => x, 1, 2, 3), 1);
    assert.deepStrictEqual(minKey(x => x[1], [3, 1], [2, 2], [1, 3]), [3, 1]);
    assert.deepStrictEqual(minKey(x => x, 1), 1);
  });
});
