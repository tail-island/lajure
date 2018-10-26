import assert from 'assert';
import {repeatedly} from '../src';

describe('test repeatedly', () => {
  it('without n', () => {
    const iter = repeatedly(() => 0);

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 0);
  });

  it('with n', () => {
    const iter = repeatedly(3, () => 0);

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 0);

    assert(iter.next().done);
  });
});
