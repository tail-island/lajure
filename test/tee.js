import assert from 'assert';
import {tee, range} from '../src';

describe('test tee', () => {
  it('sequential', () => {
    const [iter1, iter2] = tee(2, range(3));

    assert.strictEqual(iter1.next().value, 0);
    assert.strictEqual(iter1.next().value, 1);
    assert.strictEqual(iter1.next().value, 2);

    assert(iter1.next().done);

    assert.strictEqual(iter2.next().value, 0);
    assert.strictEqual(iter2.next().value, 1);
    assert.strictEqual(iter2.next().value, 2);

    assert(iter2.next().done);
  });

  it('parallel', () => {
    const [iter1, iter2] = tee(2, range(3));

    assert.strictEqual(iter1.next().value, 0);
    assert.strictEqual(iter2.next().value, 0);

    assert.strictEqual(iter1.next().value, 1);
    assert.strictEqual(iter2.next().value, 1);

    assert.strictEqual(iter1.next().value, 2);
    assert.strictEqual(iter2.next().value, 2);

    assert(iter1.next().done);
    assert(iter2.next().done);
  });

  it('null', () => {
    const [iter1, iter2] = tee(2, null);

    assert(iter1.next().done);
    assert(iter2.next().done);
  });
});
