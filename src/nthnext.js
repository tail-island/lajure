import seq      from './seq';
import sequence from './sequence';

/**
 * 集合のn番目以降のイテレーターを返します。
 *
 * @param {*[] | iterator | null} coll - 集合
 * @param {number} n - 何番目以降のデータを取得するか
 *
 * @return {iterator | null} 集合のn番目以降のイテレーター。集合の要素数がnよりも小さい場合はnull
 */
export default function nthnext(coll, n) {
  const iter = sequence(coll);

  for (let i = 0; i < n; ++i) {
    const next = iter.next();
    if (next.done) {
      return null;
    }
  }

  return seq(iter);
}
