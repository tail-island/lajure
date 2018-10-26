import assert from 'assert';
import {filter, range} from '../src';

describe('test filter', () => {
  it('filtering', () => {
    const iter = filter(x => x % 2 == 0, range(6));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 4);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = filter(x => x % 2 == 0, null);

    assert(iter.next().done);
  });
});
