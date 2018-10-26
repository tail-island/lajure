import assert from 'assert';
import {range, takeLast} from '../src';

describe('test takeLast', () => {
  it('take last values', () => {
    const iter = takeLast(2, range(5));

    assert.strictEqual(iter.next().value, 3);
    assert.strictEqual(iter.next().value, 4);

    assert(iter.next().done);
  });

  it('take longer than collection size', () => {
    const iter = takeLast(3, range(2));

    assert.strictEqual(iter.next().value, 0);
    assert.strictEqual(iter.next().value, 1);

    assert(iter.next().done);
  });

  it('null', () => {
    const iter = takeLast(0, null);

    assert(iter.next().done);
  });
});
