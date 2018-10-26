import assert from 'assert';
import {first, range} from '../src';

describe('test first', () => {
  it('first', () => {
    assert.strictEqual(first(range()),  0);
    assert.strictEqual(first(range(0)), null);
    assert.strictEqual(first(null),     null);
  });
});
