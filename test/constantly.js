import assert from 'assert';
import {constantly} from '../src';

describe('test constantly', () => {
  it('constantly', () => {
    assert.strictEqual(constantly(0)(),     0);
    assert.strictEqual(constantly(1)(0),    1);
    assert.strictEqual(constantly(2)(0, 1), 2);
  });
});
