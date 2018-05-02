import assert from 'assert';
import {call, filter, map} from '../src';

describe('test call', () => {
  it('calling', () => {
    assert.equal(call(1, x => x + 1, x => x * 2), 4);
  });
});
