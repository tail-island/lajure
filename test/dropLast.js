import assert from 'assert';
import {dropLast, range} from '../src';

describe('test dropLast', () => {
  it('dropping last items', () => {
    const iter = dropLast(2, range(5));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);

    assert(iter.next().done);
  });

  it('dropping last item', () => {
    const iter = dropLast(range(5));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 3);

    assert(iter.next().done);
  });

  it('nth item collection', () => {
    const iter = dropLast(2, range(2));

    assert(iter.next().done);
  });

  it('less than nth item collection', () => {
    const iter = dropLast(3, range(2));

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = dropLast(null);

    assert(iter.next().done);
  });
});
