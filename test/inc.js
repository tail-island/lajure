import assert from 'assert';
import {inc} from '../src';

describe('test inc', () => {
  it('inc', () => {
    assert.strictEqual(inc(0), 1);
    assert.strictEqual(inc(1), 2);
  });
});
