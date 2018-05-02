import assert from 'assert';
import {range, take} from '../src';

describe('test take', () => {
  it('taking n', () => {
    const iter = take(2, range(3));

    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 1);

    assert(iter.next().done);
  });

  it('shorter case', () => {
    const iter = take(3, range(2));

    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 1);

    assert(iter.next().done);
  });
});
