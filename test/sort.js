import assert from 'assert';
import {range, shuffle, sort} from '../src';

describe('test sort', () => {
  it('sort', () => {
    const iter = sort(shuffle(range(5)));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 4);

    assert(iter.next().done);
  });

  it('sort with comp', () => {
    const iter = sort((x, y) => x > y, shuffle(range(5)));

    assert.strictEqual(iter.next().value, 4);
    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 0);

    assert(iter.next().done);
  });
});
