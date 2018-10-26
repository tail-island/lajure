import assert from 'assert';
import {range, reductions} from '../src';

describe('test reductions', () => {
  it('reductions', () => {
    const iter = reductions((acc, x) => acc + x, 1, range(2, 11));

    assert.strictEqual(iter.next().value,  1);
    assert.strictEqual(iter.next().value,  3);
    assert.strictEqual(iter.next().value,  6);
    assert.strictEqual(iter.next().value, 10);
    assert.strictEqual(iter.next().value, 15);
    assert.strictEqual(iter.next().value, 21);
    assert.strictEqual(iter.next().value, 28);
    assert.strictEqual(iter.next().value, 36);
    assert.strictEqual(iter.next().value, 45);
    assert.strictEqual(iter.next().value, 55);

    assert(iter.next().done);
  });

  it('reductions without val', () => {
    const iter = reductions((acc, x) => acc + x, range(1, 11));

    assert.strictEqual(iter.next().value,  1);
    assert.strictEqual(iter.next().value,  3);
    assert.strictEqual(iter.next().value,  6);
    assert.strictEqual(iter.next().value, 10);
    assert.strictEqual(iter.next().value, 15);
    assert.strictEqual(iter.next().value, 21);
    assert.strictEqual(iter.next().value, 28);
    assert.strictEqual(iter.next().value, 36);
    assert.strictEqual(iter.next().value, 45);
    assert.strictEqual(iter.next().value, 55);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter1 = reductions((acc, x) => acc + x, 1, null);
    assert.strictEqual(iter1.next().value, 1);
    assert(iter1.next().done);

    const iter2 = reductions((acc, x) => acc + x, null);
    assert(iter2.next().done);
  });
});
