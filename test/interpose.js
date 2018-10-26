import assert from 'assert';
import {interpose, range} from '../src';

describe('test interpose', () => {
  it('collection', () => {
    const iter = interpose('x', range(3));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 'x');
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 'x');
    assert.strictEqual(iter.next().value, 2);

    assert(iter.next().done);
  });

  it('infinit collection', () => {
    const iter = interpose('x', range());

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 'x');
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 'x');
    assert.strictEqual(iter.next().value, 2);

    assert(!iter.next().done);
  });

  it('empty collection', () => {
    const iter = interpose('x', range(0));

    assert(iter.next().done);
  });
});
