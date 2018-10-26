import assert from 'assert';
import {min} from '../src';

describe('test min', () => {
  it('min', () => {
    assert.strictEqual(min(3, 2, 1), 1);
  });
});
