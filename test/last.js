import assert from 'assert';
import {last, range} from '../src';

describe('test last', () => {
  it('last', () => {
    assert.strictEqual(last(range(5)), 4);
    assert.strictEqual(last(range(0)), null);
    assert.strictEqual(last(null),     null);
  });
});
