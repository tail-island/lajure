import assert from 'assert';
import {fnext, range} from '../src';

describe('test fnext', () => {
  it('next first value', () => {
    const x = fnext(range(3));

    assert.strictEqual(x, 1);
  });

  it('one item collection', () => {
    const x = fnext(range(1));

    assert.strictEqual(x, null);
  });

  it('empty collection', () => {
    const x = fnext(range(0));

    assert.strictEqual(x, null);
  });

  it('null', () => {
    const x = fnext(null);

    assert.strictEqual(x, null);
  });
});
