import assert from 'assert';
import {nthrest, range} from '../src';

describe('test nthrest', () => {
  it('nth rest values', () => {
    const iter = nthrest(range(5), 2);

    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 4);

    assert(iter.next().done);
  });

  it('nth item collection', () => {
    const iter = nthrest(range(2), 2);

    assert(iter.next().done);
  });

  it('less than nth item collection', () => {
    const iter = nthrest(range(2), 3);

    assert(iter.next().done);
  });
});
