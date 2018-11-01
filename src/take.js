import sequence from './sequence';

/**
 * 集合の先頭n個の要素のイテレーターを返します。
 *
 * @param {number} n - 取得する要素の数
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 先頭n個の要素の集合のイテレーター
 *
 * @example
 * take(3, range());  // [0, 1, 2]のイテレーター
 */
export default function* take(n, coll) {
  const iter = sequence(coll);

  for (let i = 0; i < n; ++i) {
    const next = iter.next();
    if (next.done) {
      break;
    }

    yield next.value;
  }
}
