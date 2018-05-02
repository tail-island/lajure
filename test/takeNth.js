import assert from 'assert';
import {range, takeNth} from '../src';

describe('test takeNth', () => {
  it('taking every nth', () => {
    const iter = takeNth(2, range(6));

    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 2);
    assert.equal(iter.next().value, 4);

    assert(iter.next().done);
  });
});
