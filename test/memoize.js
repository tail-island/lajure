import assert from 'assert';
import {memoize} from '../src';

describe('test memoize', () => {
  it('calling memoized functions', () => {
    let a = 0;
    const f = memoize(x => a++ + x);

    assert.strictEqual(f(0), 0);
    assert.strictEqual(f(0), 0);
  });

  it('calling non memoized functions', () => {
    let a = 0;
    const f = x => a++ + x;

    assert.strictEqual(f(0), 0);
    assert.strictEqual(f(0), 1);
  });
});
