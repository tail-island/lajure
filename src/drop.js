import nthrest from './nthrest';

/**
 * 集合から先頭n個の要素を削除したイテレーターを返します。
 *
 * @param {number} n - 削除する要素の数
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 先頭n個の要素が削除された集合のイテレーター
 *
 * @example
 * drop(2, range());  // [2, 3, 4, ...]のイテレーター
 */
export default function drop(n, coll) {
  return nthrest(coll, n);
}
