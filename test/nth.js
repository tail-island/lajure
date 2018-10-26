import assert from 'assert';
import {nth, range} from '../src';

describe('test nth', () => {
  it('nth', () => {
    assert.strictEqual(nth(range(3), 2), 2);
    assert.strictEqual(nth(range(2), 2), null);
    assert.strictEqual(nth(null,     2), null);
  });
});
