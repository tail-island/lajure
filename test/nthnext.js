import assert from 'assert';
import {nthnext, range} from '../src';

describe('test nthnext', () => {
  it('nth next values', () => {
    const iter = nthnext(range(5), 2);

    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 4);

    assert(iter.next().done);
  });

  it('nth item collection', () => {
    const iter = nthnext(range(2), 2);

    assert.strictEqual(iter, null);
  });

  it('less than nth item collection', () => {
    const iter = nthnext(range(2), 3);

    assert.strictEqual(iter, null);
  });
});
