import filter from './filter';

/**
 * 各要素を確率probで抽出します。一般に、抽出される要素の数がcount(coll) * probと一致するとは限りません。
 * n個必要で順序が安定でなくても良い場合は、take(n, shuffle(coll))を使用してください。
 *
 * @param {number} prob - 要素を抽出する確率
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 抽出された集合のイテレーター
 *
 * @example
 * randomSample(0.5, [1, 2, 3, 4, 5]);  // [1, 3, 5]や[1, 2]や[4]などのイテレーター
 */
export default function randomSample(prob, coll) {
  return filter(_ => Math.random() <= prob, coll);
}
