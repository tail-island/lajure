import assert from 'assert';
import {apply, first, juxt, map, next, range, tee} from '../src';

describe('test juxt', () => {
  it('with simple args', () => {
    const iter = juxt(x => x + 1, x => x - 1)(0);

    assert.equal(iter.next().value,  1);
    assert.equal(iter.next().value, -1);

    assert(iter.next().done);
  });

  it('with iterator args', () => {
    const [x, iter] = juxt(first, next)(range(3));

    assert.equal(x,                 0);
    assert.equal(iter.next().value, 1);  // firstでイテレーターが進むので1が飛ばされるはずなのですけど、特例としてteeしています。
    assert.equal(iter.next().value, 2);

    assert(iter.next().done);
  });

  it('with iterator args #2', () => {
    // なので、上のケースは、teeを交えたこんな感じで実行されています。

    const [x, iter] = map((f, coll) => f(coll), [first, next], tee(2, range(3)));

    assert.equal(x,                 0);
    assert.equal(iter.next().value, 1);
    assert.equal(iter.next().value, 2);

    assert(iter.next().done);
  });
});
