import assert from 'assert';
import {drop, range} from '../src';

describe('test drop', () => {
  it('nth dropped values', () => {
    const iter = drop(2, range(5));

    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 4);

    assert(iter.next().done);
  });

  it('nth item collection', () => {
    const iter = drop(2, range(2));

    assert(iter.next().done);
  });

  it('less than nth item collection', () => {
    const iter = drop(3, range(2));

    assert(iter.next().done);
  });
});
