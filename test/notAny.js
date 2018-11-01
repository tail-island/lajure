import assert from 'assert';
import {notAny, range} from '../src';

describe('test notAny', () => {
  it('all returns false', () => {
    assert.strictEqual(notAny(x => x % 2 == 1, range(0, 4, 2)), true);
  });

  it('some returns true', () => {
    assert.strictEqual(notAny(x => x % 2 == 1, range(4)), false);
  });

  it('some returns value', () => {
    assert.strictEqual(notAny(x => x % 2 == 1 ? x : false, range(4)), false);
  });
});
