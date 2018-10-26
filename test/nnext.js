import assert from 'assert';
import {nnext, range} from '../src';

describe('test nnext', () => {
  it('next next values', () => {
    const iter = nnext(range(3));

    assert.strictEqual(iter.next().value, 2);

    assert(iter.next().done);
  });

  it('two item collection', () => {
    const iter = nnext(range(2));

    assert.strictEqual(iter, null);
  });

  it('empty collection', () => {
    const iter = nnext(range(0));

    assert.strictEqual(iter, null);
  });

  it('null', () => {
    const iter = nnext(null);

    assert.strictEqual(iter, null);
  });
});
