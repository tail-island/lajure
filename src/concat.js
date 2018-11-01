import sequence from './sequence';

/**
 * 複数の集合を結合します。
 *
 * @param {*[][] | iterator[]} xss - 結合したい集合の集合
 *
 * @return {iterator} 結合された集合のイテレーター
 *
 * @example
 * concat([1, 2, 3], [4, 5, 6]);  // [1, 2, 3, 4, 5, 6]のイテレーターを返す
 */
export default function* concat(...xss) {
  for (const xs of xss) {
    for (const x of sequence(xs)) {
      yield x;
    }
  }
}
