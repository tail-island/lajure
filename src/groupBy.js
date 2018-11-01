import sequence from './sequence';

/**
 * 集合の要素をグループ単位に分けたマップを返します。
 *
 * @param {function} f - 要素に対する操作
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return f(x)をキー、xの配列を値に持つマップ
 *
 * @example
 * groupBy(x => x % 2 === 0 ? 'even' : 'odd', range(10));  // Map([['even', [0, 2, 4, 6, 8]], ['odd', [1, 3, 5, 7, 9]]]);
 */
export default function groupBy(f, coll) {
  const map = new Map();

  for (const x of sequence(coll)) {
    const k = f(x);

    if (map.has(k)) {
      map.get(k).push(x);
    } else {
      map.set(k, [x]);
    }
  }

  return map;
}
