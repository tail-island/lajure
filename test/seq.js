import assert from 'assert';
import {seq} from '../src';

describe('test seq', () => {
  it('create sequence', () => {
    const iter = seq([1, 2, 3]);

    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 3);

    assert(iter.next().done);
  });

  it('empty collection', () => {
    const iter = seq([]);

    assert.strictEqual(iter, null);
  });

  it('null', () => {
    const iter = seq(null);

    assert.strictEqual(iter, null);
  });
});
