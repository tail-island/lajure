import assert from 'assert';
import {butlast, range} from '../src';

describe('test butlast', () => {
  it('items without last item', () => {
    const iter = butlast(range(3));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);

    assert(iter.next().done);
  });

  it('one item collection', () => {
    const iter = butlast(range(1));

    assert.strictEqual(iter, null);
  });

  it('empty collection', () => {
    const iter = butlast(range(0));

    assert.strictEqual(iter, null);
  });

  it('null', () => {
    const iter = butlast(null);

    assert.strictEqual(iter, null);
  });
});
