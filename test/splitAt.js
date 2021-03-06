import assert from 'assert';
import {range, splitAt} from '../src';

describe('test splitAt', () => {
  it('split', () => {
    const [iter1, iter2] = splitAt(2, range(5));

    assert.strictEqual(iter1.next().value, 0);
    assert.strictEqual(iter1.next().value, 1);
    assert(iter1.next().done);

    assert.strictEqual(iter2.next().value, 2);
    assert.strictEqual(iter2.next().value, 3);
    assert.strictEqual(iter2.next().value, 4);
    assert(iter2.next().done);
  });
});
