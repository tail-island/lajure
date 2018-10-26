import assert from 'assert';
import {range, reduce} from '../src';

describe('test reduce', () => {
  it('reducing', () => {
    assert.strictEqual(reduce((acc, x) => acc + x, 1, range(2, 11)), 55);
  });

  it('reducing without val', () => {
    assert.strictEqual(reduce((acc, x) => acc + x, range(1, 11)), 55);
  });

  it('null', () => {
    assert.strictEqual(reduce((acc, x) => acc + x, 1, null), 1);
    assert.strictEqual(reduce((acc, x) => acc + x, null), null);
  });
});
