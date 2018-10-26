import assert from 'assert';
import {complement} from '../src';

describe('test complement', () => {
  it('complement', () => {
    assert.strictEqual(complement((a, b) => a == b)(1, 2), true);
    assert.strictEqual(complement((a, b) => a != b)(1, 2), false);

    assert.strictEqual(complement((a, b) => a == b)(1, 1), false);
    assert.strictEqual(complement((a, b) => a != b)(1, 1), true);
  });
});
