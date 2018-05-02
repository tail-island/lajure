import assert from 'assert';
import {isEmpty, range, tee} from '../src';

describe('test isEmpty', () => {
  it('empty case', () => {
    assert.ok(isEmpty([]));
  });

  it('not empty case', () => {
    const [iter1, iter2] = tee(2, range(3));

    assert(!isEmpty(iter1));  // ここでイテレーターを消費しちゃうので、teeしないと駄目……。

    assert.equal(iter2.next().value, 0);
    assert.equal(iter2.next().value, 1);
    assert.equal(iter2.next().value, 2);

    assert(iter2.next().done);
  });
});
