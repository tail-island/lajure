import assert from 'assert';
import {ffirst, range} from '../src';

describe('test ffirst', () => {
  it('first first', () => {
    assert.strictEqual(ffirst([[0, 1], [2, 3]]), 0);
    assert.strictEqual(ffirst([]),               null);
    assert.strictEqual(ffirst(null),             null);
  });
});
