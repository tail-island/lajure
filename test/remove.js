import assert from 'assert';
import {range, remove} from '../src';

describe('test remove', () => {
  it('removing', () => {
    const iter = remove(x => x % 2 == 0, range(6));

    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 5);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = remove(x => x % 2 == 0, null);

    assert(iter.next().done);
  });
});
