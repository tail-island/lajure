import assert from 'assert';
import {someCall} from '../src';

describe('test someCall', () => {
  it('early stopping', () => {
    assert.equal(
      someCall({value: 1},
               x => ++x.value,
               x => null,
               x => ++x.value),
      null);
  });

  it('early stopping #2', () => {
    assert.equal(
      someCall({value: 1},
               x => ++x.value,
               x => undefined,
               x => ++x.value),
      undefined);
  });

  it('not stop', () => {
    assert.equal(
      someCall({value: 0},
               x => ++x.value,
               x => ++x.value,
               x => ++x.value).value,
      3);
  });
});
