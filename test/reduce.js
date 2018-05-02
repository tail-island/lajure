import assert from 'assert';
import {range, reduce} from '../src';

describe('test reduce', () => {
  it('reducing', () => {
    assert.equal(reduce((acc, x) => acc + x, 1, range(2, 11)), 55);
  });

  it('reducing without val', () => {
    assert.equal(reduce((acc, x) => acc + x, range(1, 11)), 55);
  });
});
