import assert from 'assert';
import {keep, range} from '../src';

describe('test keep', () => {
  it('keeping', () => {
    const iter = keep(x => x % 2 == 0 ? x * 2 : null, range(5));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 4);
    assert.strictEqual(iter.next().value, 8);

    assert(iter.next().done);
  });

  it('be careful!', () => {
    const iter = keep(x => x % 2 == 0, range(5));

    assert.strictEqual(iter.next().value, true);
    assert.strictEqual(iter.next().value, false);
    assert.strictEqual(iter.next().value, true);

    assert(!iter.next().done);
  });
});
