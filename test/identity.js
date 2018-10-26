import assert from 'assert';
import {identity} from '../src';

describe('test identity', () => {
  it('identitying', () => {
    assert.strictEqual(identity(0), 0);
    assert.strictEqual(identity(1), 1);
    assert.strictEqual(identity(2), 2);
  });
});
