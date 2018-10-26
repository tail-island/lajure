import assert from 'assert';
import {fnil} from '../src';

describe('test fnil', () => {
  it('fnil', () => {
    const f = fnil((a, b, c) => a + b + c, 1, 2, 3);

    assert.strictEqual(f(6,    null, null), 11);
    assert.strictEqual(f(6,    5,    null), 14);
    assert.strictEqual(f(6,    5,    4   ), 15);
    assert.strictEqual(f(6,    null, 4   ), 12);
    assert.strictEqual(f(null, null, null),  6);
    assert.strictEqual(f(null, 5,    null),  9);
    assert.strictEqual(f(null, 5,    4   ), 10);
    assert.strictEqual(f(null, null, 4   ),  7);
  });
});
