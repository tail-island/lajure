import assert from 'assert';
import {concat} from '../src';

describe('test concat', () => {
  it('concatenate', () => {
    const iter = concat([0, 1], [2, 3]);

    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 2);
    assert.equal(iter.next().value, 3);

    assert(iter.next().done);
  });
});
