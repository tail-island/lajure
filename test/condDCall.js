import assert from 'assert';
import {condCall} from '../src';

describe('test condCall', () => {
  it('it\'s cond->', () => {
    assert.equal(condCall(1 + 1,
                          true,  x => x + 1,
                          false, x => x - 1),
                 3);
  });
});
