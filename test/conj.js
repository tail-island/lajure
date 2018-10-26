import assert from 'assert';
import {conj, range} from '../src';

describe('test conj', () => {
  it('conj', () => {
    const iter = conj(range(1, 3), 0);

    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 0);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = conj(null, 0);

    assert.strictEqual(iter.next().value, 0);

    assert(iter.next().done);
  });
});
