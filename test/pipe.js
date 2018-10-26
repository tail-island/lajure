import assert from 'assert';
import {pipe} from '../src';

describe('test pipe', () => {
  it('piping', () => {
    assert.strictEqual(pipe(x => x + 1, x => x * 2)(1), 4);
  });
});
