import assert from 'assert';
import {notEvery, range} from '../src';

describe('test notEvery', () => {
  it('all true', () => {
    assert.strictEqual(notEvery(x => x % 2 == 1, range(1, 6, 2)), false);
  });

  it('some false', () => {
    assert.strictEqual(notEvery(x => x % 2 == 0, range(2)), true);
  });

  it('empty collection', () => {
    assert.strictEqual(notEvery(x => x % 2 == 0, range(0)), false);
  });

  it('null', () => {
    assert.strictEqual(notEvery(x => x % 2 == 0, null), false);
  });
});
