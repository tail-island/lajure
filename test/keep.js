import assert from 'assert';
import {keep, range} from '../src';

describe('test keep', () => {
  it('keeping', () => {
    const iter = keep(x => x % 2 == 0 ? x * 2 : null, range(5));

    assert.equal(iter.next().value, 0);
    assert.equal(iter.next().value, 4);
    assert.equal(iter.next().value, 8);

    assert(iter.next().done);
  });

  it('be careful!', () => {
    const iter = keep(x => x % 2 == 0, range(5));

    assert.equal(iter.next().value, true);
    assert.equal(iter.next().value, false);
    assert.equal(iter.next().value, true);

    assert(!iter.next().done);
  });
});
