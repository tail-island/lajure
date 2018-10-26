import assert from 'assert';
import {iterate} from '../src';

describe('test iterate', () => {
  it('iterating', () => {
    const iter = iterate(x => x + 1, 0);

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);
  });
});
