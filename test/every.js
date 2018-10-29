import assert from 'assert';
import {every, range} from '../src';

describe('test every', () => {
  it('all true', () => {
    assert.strictEqual(every(x => x % 2 == 1, range(1, 6, 2)), true);
  });

  it('some false', () => {
    assert.strictEqual(every(x => x % 2 == 0, range(2)), false);
  });

  it('empty collection', () => {
    assert.strictEqual(every(x => x % 2 == 0, range(0)), true);  // falseが正しい気もするけど、Clojureだとtrueになるので。
  });

  it('null', () => {
    assert.strictEqual(every(x => x % 2 == 0, null), true);
  });
});
