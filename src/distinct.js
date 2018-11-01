import sequence from './sequence';

/**
 * 集合から重複した要素を削除したイテレーターを返します。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 重複した要素が削除された集合のイテレーター
 *
 * @example
 * distinct([1, 2, 3, 3, 3, 1, 1, 4]);  // [1, 2, 3, 4]のイテレーター
 */
export default function* distinct(coll) {
  const seen = new Set();

  for (const x of sequence(coll)) {
    if (!seen.has(x)) {
      seen.add(x);

      yield x;
    }
  }
}
