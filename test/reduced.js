import assert from 'assert';
import {range, reduce, reduced} from '../src';

describe('test reduced', () => {
  it('early stopping', () => {
    assert.strictEqual(
      reduce((acc, x) => {
        if (x > 10) {
          return reduced(acc);
        }

        return acc + x;
      }, range(1, 101)),
      55
    );
  });
});
