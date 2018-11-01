import sequence from './sequence';

/**
 * n個単位に要素を抽出した集合のイテレーターを返します。
 *
 * @param {number} n - 取得する要素の場所
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} n番目の要素、n * 2番目の要素、n * 3番目の要素...の集合のイテレーター
 *
 * @example
 * takeNth(2, range());  [0, 2, 4, 6, 8, 10...]のイテレーター
 */
export default function* takeNth(n, coll) {
  let i = 0;

  for (const x of sequence(coll)) {
    if (i++ % n === 0) {
      yield x;
    }
  }
}
