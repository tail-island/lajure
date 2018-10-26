import assert from 'assert';
import {isSequencial, range} from '../src';

describe('test isSequencial', () => {
  it('collection', () => {
    assert(isSequencial([1]));
    assert(isSequencial(range(1)));
    assert(isSequencial([]));
    assert(isSequencial(range(0)));
  });

  it('null', () => {
    assert(!isSequencial(null));
  });
});
