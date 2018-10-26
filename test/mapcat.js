import assert from 'assert';
import {mapcat, range} from '../src';

describe('test mapcat', () => {
  it('one coll', () => {
    const iter = mapcat(x => [x, x], range(3));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 2);

    assert(iter.next().done);
  });
});
