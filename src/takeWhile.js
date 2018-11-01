import sequence from './sequence';

/**
 * 先頭から続く、条件を満たす要素を抽出したイテレーターを返します。
 *
 * @param {function} pred - 抽出する条件
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 先頭から続く条件を満たす要素が抽出されたイテレーター
 *
 * @example
 * takeWhile(x => x < 2, [0, 1, 2, 3, 2, 1, 0]);  // [0, 1]のイテレーター
 */
export default function* takeWhile(pred, coll) {
  for (const x of sequence(coll)) {
    if (!pred(x)) {
      return;
    }

    yield x;
  }
}
