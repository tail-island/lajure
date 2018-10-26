import assert from 'assert';
import {groupBy} from '../src';

describe('test groupBy', () => {
  it('grouping', () => {
    const map = groupBy(x => x.length, ['a', 'bc', 'bcd', 'ef', 'g']);

    const ks = Array.from(map.keys()); ks.sort();
    assert.deepStrictEqual(ks, [1, 2, 3]);

    const vs1 = map.get(1);
    assert.deepStrictEqual(vs1, ['a', 'g']);

    const vs2 = map.get(2);
    assert.deepStrictEqual(vs2, ['bc', 'ef']);

    const vs3 = map.get(3);
    assert.deepStrictEqual(vs3, ['bcd']);
  });

  it('null', () => {
    const map = groupBy(x => x.length, null);

    assert.deepStrictEqual(map, new Map());
  });
});
