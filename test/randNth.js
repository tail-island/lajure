import assert from 'assert';
import {randNth, range} from '../src';

describe('test randNth', () => {
  it('random nth', () => {
    const x = randNth(range(5));

    assert(new Set([0, 1, 2, 3, 4]).has(x));
  });
});
