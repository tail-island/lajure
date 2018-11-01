import seq from './seq';

/**
 * 一つ前の要素と値が異なる要素のみの集合のイテレーターを返します。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 一つ前の要素と値が異なる要素のみの集合のイテレーター
 *
 * @example
 * dedupe([1, 2, 3, 3, 3, 1, 1, 4]);  // [1, 2, 3, 1, 4]のイテレーター
 */
export default function* dedupe(coll) {
  const iter = seq(coll);
  if (!iter) {
    return;
  }

  let prev = iter.next().value;
  yield prev;

  for (const x of iter) {
    if (x !== prev) {
      yield x;

      prev = x;
    }
  }
}
