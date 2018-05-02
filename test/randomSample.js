import assert from 'assert';
import {count, filter, map, next, randomSample, range} from '../src';

describe('test randomSample', () => {
  it('random sampling', () => {
    const coll = Array.from(randomSample(0.1, range(1000)));

    assert(coll.length >  50);
    assert(coll.length < 150);

    assert.equal(count(filter(([x, y]) => x < y && x >= 0 && x < 1000, map(Array.of, coll, next(coll)))), coll.length - 1);
  });
});
