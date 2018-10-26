import assert from 'assert';
import {max} from '../src';

describe('test max', () => {
  it('max', () => {
    assert.strictEqual(max(1, 2, 3), 3);
  });
});
