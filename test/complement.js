import assert from 'assert';
import {complement} from '../src';

describe('test complement', () => {
  it('complement', () => {
    assert.equal(complement((a, b) => a == b)(1, 2), true);
    assert.equal(complement((a, b) => a != b)(1, 2), false);

    assert.equal(complement((a, b) => a == b)(1, 1), false);
    assert.equal(complement((a, b) => a != b)(1, 1), true);
  });
});
