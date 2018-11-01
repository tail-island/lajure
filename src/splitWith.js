import dropWhile from './dropWhile';
import juxt      from './juxt';
import partial   from './partial';
import sequence  from './sequence';
import takeWhile from './takeWhile';

/**
 * 先頭から続く指定した条件を満たす要素の集合tと、そうでない要素の集合に分割します。[takeWhile(pred, coll), dropWhile(pred, coll)]です。
 *
 * @param {function} pred - 条件
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator[]} 分割された集合のイテレーターの配列
 *
 * @example
 * splitWith(x => x < 3, [1, 2, 3, 2, 1]);  // [[1, 2]のイテレーター, [3, 2, 1]のイテレーター]
 */
export default function splitWith(pred, coll) {
  return juxt(partial(takeWhile, pred), partial(dropWhile, pred))(sequence(coll));
}
