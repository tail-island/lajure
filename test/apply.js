import assert from 'assert';
import {apply} from '../src';

describe('test apply', () => {
  it('calling applyed functions', () => {
    assert.equal(apply((a, b, c, d) => a + b + c + d, 1, 2)([3, 4]), 10);
  });
});
