import assert from 'assert';
import {next, range} from '../src';

describe('test next', () => {
  it('next values', () => {
    const iter = next(range(3));

    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 2);

    assert(iter.next().done);
  });
});
