import assert from 'assert';
import {range} from '../src';

describe('test range', () => {
  it('infinite range', () => {
    const iter = range();

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);

    assert(!iter.next().done);
  });

  it ('0..n', () => {
    const iter = range(3);

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);

    assert(iter.next().done);
  });

  it ('start..end', () => {
    const iter = range(1, 4);

    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 3);

    assert(iter.next().done);
  });

  it ('start..end with step', () => {
    const iter = range(1, 7, 2);

    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 5);

    assert(iter.next().done);
  });

  it ('start..end with step #2', () => {
    const iter = range(1, 6, 2);

    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 5);

    assert(iter.next().done);
  });
});
