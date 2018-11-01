import seq      from './seq';
import sequence from './sequence';

/**
 * 指定した関数の戻り値が変更になるたびに、集合を分割します。
 *
 * @param {function} f - 関数
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 分割された集合のイテレーター
 *
 * @example
 * partitionBy(x => x % 2 === 0, [1, 1, 1, 2, 2, 3, 3, 4]);  // [[1, 1, 1], [2, 2], [3, 3], [4]]のイテレーター
 */
export default function* partitionBy(f, coll) {
  const iter = seq(coll);
  if (!iter) {
    return sequence(null);
  }

  const next = iter.next();

  let xs   = [next.value];
  let prev = f(next.value);

  for (const x of iter) {
    const r = f(x);
    if (r != prev) {
      yield xs;

      xs = [];
      prev = r;
    }

    xs.push(x);
  }

  yield xs;
}
