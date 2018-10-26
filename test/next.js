import assert from 'assert';
import {next, range} from '../src';

describe('test next', () => {
  it('next values', () => {
    const iter = next(range(3));

    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);

    assert(iter.next().done);
  });

  it('empty collection', () => {
    const iter = next(range(1));

    assert.strictEqual(iter, null);
  });

  it('one item collection', () => {
    const iter = next(range(1));

    assert.strictEqual(iter, null);
  });
});
