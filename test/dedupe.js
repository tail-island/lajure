import assert from 'assert';
import {dedupe} from '../src';

describe('test dedupe', () => {
  it('deduping', () => {
    const iter = dedupe([1, 2, 3, 3, 3, 1, 1, 4]);

    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 2);
    assert.equal(iter.next().value, 3);
    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 4);

    assert(iter.next().done);
  });
});
