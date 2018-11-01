import seq from './seq';

/**
 * 最後の要素を除いた集合のイテレーターを返します。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator | null} 最後の要素を除いた集合のイテレーター
 */
export default function butlast(coll) {
  return seq(function*() {
    const iter = seq(coll);
    if (!iter) {
      return;
    }

    let prev = iter.next().value;

    for (const x of iter) {
      yield prev;

      prev = x;
    }
  }());
}
