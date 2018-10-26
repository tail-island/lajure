import assert from 'assert';
import {range, takeNth} from '../src';

describe('test takeNth', () => {
  it('taking every nth', () => {
    const iter = takeNth(2, range(6));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 2);
    assert.strictEqual(iter.next().value, 4);

    assert(iter.next().done);
  });

  it('taking every nth', () => {
    const iter = takeNth(2, null);

    assert(iter.next().done);
  });
});
