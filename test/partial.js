import assert from 'assert';
import {partial} from '../src';

describe('test partial', () => {
  it('calling partialed functions', () => {
    assert.equal(partial((a, b, c, d) => a + b + c + d, 1, 2)(3, 4), 10);
  });
});
