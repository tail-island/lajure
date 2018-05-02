import assert from 'assert';
import {first, range} from '../src';

describe('test first', () => {
  it('first', () => {
    assert.equal(first(range()),  0);
    assert.equal(first(range(0)), undefined);
  });
});
