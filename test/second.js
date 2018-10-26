import assert from 'assert';
import {first, juxt, range, second} from '../src';

describe('test second', () => {
  it('second', () => {
    assert.strictEqual(second(range(2)), 1);
    assert.strictEqual(second(range(1)), null);
    assert.strictEqual(second(range(0)), null);
    assert.strictEqual(second(null),     null);
  });

  it('with first', () => {
    const [firstValue, secondValue] = juxt(first, second)(range());  // iteratorが進んでしまうのを避けるために、juxtの特例を使用してください。

    assert.strictEqual(firstValue,  0);
    assert.strictEqual(secondValue, 1);
  });
});
