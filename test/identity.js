import assert from 'assert';
import {identity} from '../src';

describe('test identity', () => {
  it('identitying', () => {
    assert.equal(identity(0), 0);
    assert.equal(identity(1), 1);
    assert.equal(identity(2), 2);
  });
});
