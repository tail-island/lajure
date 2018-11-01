import sequence from './sequence';

/**
 * 要素を1つランダムに抽出します。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {*} ランダムに抽出された要素
 */
export default function randNth(coll) {
  const xs = Array.from(sequence(coll));

  return xs[Math.floor(Math.random() * xs.length)];
}
