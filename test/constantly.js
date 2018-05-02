import assert from 'assert';
import {constantly} from '../src';

describe('test constantly', () => {
  it('constantly', () => {
    assert.equal(constantly(0)(),     0);
    assert.equal(constantly(1)(0),    1);
    assert.equal(constantly(2)(0, 1), 2);
  });
});
