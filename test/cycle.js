import assert from 'assert';
import {cycle, range} from '../src';

describe('test cycle', () => {
  it('collection', () => {
    const iter = cycle(range(2));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);

    assert(!iter.next().done);
  });

  it('infinit collection', () => {
    const iter = cycle(range());

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);

    assert(!iter.next().done);
  });
});
