import sequence from './sequence';

/**
 * 集合の末尾n個の要素のイテレーターを返します。
 *
 * @param {number} n - 取得する要素の数
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 末尾n個の要素の集合のイテレーター
 *
 * @example
 * takeLast(3, range(10));  // [7, 8, 9]のイテレーター
 */
export default function takeLast(n, coll) {
  const xs = [];

  for (const x of sequence(coll)) {
    xs.push(x);

    if (xs.length > n) {
      xs.shift();
    }
  }

  return sequence(xs);
}
