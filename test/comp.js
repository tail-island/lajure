import assert from 'assert';
import {comp} from '../src';

describe('test comp', () => {
  it('composing', () => {
    assert.equal(comp(x => x + 1, x => x * 2)(1), 3);
  });
});
