import assert from 'assert';
import {count, range} from '../src';

describe('test count', () => {
  it('counting', () => {
    assert.strictEqual(count(range(3)), 3);
  });

  it('null', () => {
    assert.strictEqual(count(null), 0);
  });
});
