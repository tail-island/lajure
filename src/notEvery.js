import every from './every';

/**
 * 集合の要素の中に、条件を満たさないものがあるか確認します。everyの反対です。
 *
 * @param {function} pred - 条件
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {boolean} 条件を満たさないものがあればtrue、そうでなければfalse
 */
export default function notEvery(pred, coll) {
  return !every(pred, coll);
}
