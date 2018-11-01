import drop     from './drop';
import juxt     from './juxt';
import partial  from './partial';
import sequence from './sequence';
import take     from './take';

/**
 * 指定した箇所で集合を分割します。
 *
 * @param {number} n - 分割する場所
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator[]} 分割された集合のイテレーターの配列
 *
 * @example
 * splitAt(2, [1, 2, 3, 4, 5]);  // [[1, 2]のイテレーター, [3, 4, 5]のイテレーター]
 */
export default function splitAt(n, coll) {
  return juxt(partial(take, n), partial(drop, n))(sequence(coll));
}
