import assert from 'assert';
import {tee, range} from '../src';

describe('test tee', () => {
  it('sequential', () => {
    const [iter1, iter2] = tee(2, range(3));

    assert.equal(iter1.next().value, 0);
    assert.equal(iter1.next().value, 1);
    assert.equal(iter1.next().value, 2);

    assert(iter1.next().done);

    assert.equal(iter2.next().value, 0);
    assert.equal(iter2.next().value, 1);
    assert.equal(iter2.next().value, 2);

    assert(iter2.next().done);
  });

  it('parallel', () => {
    const [iter1, iter2] = tee(2, range(3));

    assert.equal(iter1.next().value, 0);
    assert.equal(iter2.next().value, 0);

    assert.equal(iter1.next().value, 1);
    assert.equal(iter2.next().value, 1);

    assert.equal(iter1.next().value, 2);
    assert.equal(iter2.next().value, 2);

    assert(iter1.next().done);
    assert(iter2.next().done);
  });
});
