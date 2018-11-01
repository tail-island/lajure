import assert from 'assert';
import {cons, lazySeqFn} from '../src';

describe('test lazySeqFn', () => {
  it('create sequence', () => {
    function fibonacciNumbers(x, y) {
      return cons(x, lazySeqFn(() => fibonacciNumbers(y, x + y)));
    }

    const iter = fibonacciNumbers(1, 2);

    assert.strictEqual(iter.next().value,  1);
    assert.strictEqual(iter.next().value,  2);
    assert.strictEqual(iter.next().value,  3);
    assert.strictEqual(iter.next().value,  5);
    assert.strictEqual(iter.next().value,  8);
    assert.strictEqual(iter.next().value, 13);
    assert.strictEqual(iter.next().value, 21);
    assert.strictEqual(iter.next().value, 34);
    assert.strictEqual(iter.next().value, 55);
    assert.strictEqual(iter.next().value, 89);

    assert(!iter.next().done);
  });
});
