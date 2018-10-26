import assert from 'assert';
import {sequence} from '../src';

describe('test sequence', () => {
  it('create sequence', () => {
    const iter = sequence([1, 2, 3]);

    assert.strictEqual(iter.next().value, 1);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 3);

    assert(iter.next().done);
  });

  it('empty collection', () => {
    const iter = sequence([]);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = sequence(null);

    assert(iter.next().done);
  });
});
