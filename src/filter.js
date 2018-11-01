import sequence from './sequence';

/**
 * 集合から条件を満たす要素を抽出し、その要素の集合のイテレーターを返します。
 *
 * @param {function} pred - 条件
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 抽出された要素の集合のイテレーター
 *
 * @example
 * filter(x => x % 2 === 0, iterate(inc, 1));  // [2, 4, 6, 8, ...]のイテレーター
 */
export default function* filter(pred, coll) {
  for (const x of sequence(coll)) {
    if (pred(x)) {
      yield x;
    }
  }
}
