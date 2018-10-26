import assert from 'assert';
import {rest, range} from '../src';

describe('test rest', () => {
  it('rest values', () => {
    const iter = rest(range(3));

    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);

    assert(iter.next().done);
  });

  it('empty collection', () => {
    const iter = rest(range(1));

    assert(iter.next().done);
  });

  it('one item collection', () => {
    const iter = rest(range(1));

    assert(iter.next().done);
  });
});
