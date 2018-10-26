import assert from 'assert';
import {cons, range} from '../src';

describe('test cons', () => {
  it('constructing', () => {
    const iter = cons(0, range(1, 3));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = cons(0, null);

    assert.strictEqual(iter.next().value, 0);

    assert(iter.next().done);
  });
});
