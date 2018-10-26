import assert from 'assert';
import {range, replace} from '../src';

describe('test replace', () => {
  it('replace', () => {
    const iter = replace(new Map([[0, 'zero'], [1, 'one'], [2, 'two'], [3, 'three'], [4, 'four']]), range(5));

    assert.strictEqual(iter.next().value, 'zero');
    assert.strictEqual(iter.next().value, 'one');
    assert.strictEqual(iter.next().value, 'two');
    assert.strictEqual(iter.next().value, 'three');
    assert.strictEqual(iter.next().value, 'four');

    assert(iter.next().done);
  });
});
