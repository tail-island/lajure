import assert from 'assert';
import {call, someFn} from '../src';

describe('test someFn', () => {
  it('someFn returns true', () => {
    assert.equal(call(9,
                      someFn(x => x % 2 == 0,
                             x => x % 3 == 0)),
                 true);
  });

  it('someFn returns value', () => {
    assert.equal(call(9,
                      someFn(x => x % 2 == 0 ? 2 : false,
                             x => x % 3 == 0 ? 3 : false,
                             x => x % 9 == 0 ? 9 : false)),
                 3);
  });

  it('someFn returns false', () => {
    assert.equal(call(5,
                      someFn(x => x % 2 == 0,
                             x => x % 3 == 0)),
                 false);
  });
});
