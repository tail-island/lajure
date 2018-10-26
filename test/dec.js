import assert from 'assert';
import {dec} from '../src';

describe('test dec', () => {
  it('dec', () => {
    assert.strictEqual(dec(2), 1);
    assert.strictEqual(dec(1), 0);
  });
});
