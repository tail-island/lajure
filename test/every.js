import assert from 'assert';
import {every, range} from '../src';

describe('test every', () => {
  it('all true', () => {
    assert.equal(every(x => x % 2 == 1, range(1, 6, 2)), true);
  });

  it('some false', () => {
    assert.equal(every(x => x % 2 == 0, range(2)), false);
  });
});
