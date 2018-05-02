import assert from 'assert';
import {count, range} from '../src';

describe('test count', () => {
  it('counting', () => {
    assert.equal(count(range(3)), 3);
  });
});
