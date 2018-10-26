import assert from 'assert';
import {concat, range, takeWhile} from '../src';

describe('test takeWhile', () => {
  it('take values', () => {
    const iter = takeWhile(x => x < 0, concat(range(-2, 2), [-1]));

    assert.strictEqual(iter.next().value, -2);
    assert.strictEqual(iter.next().value, -1);

    assert(iter.next().done);
  });

  it('empty result', () => {
    const iter = takeWhile(x => x < 0, range(2));

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = takeWhile(x => x < 0, null);

    assert(iter.next().done);
  });
});
