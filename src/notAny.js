import some from './some';

/**
 * 集合の要素の中に、条件を満たすものが1つもないことを確認します。someの反対です。
 *
 * @param {function} pred - 条件
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {boolean} 条件を満たす要素が1つもなければtrue、そうでなければfalse
 */
export default function notAny(pred, coll) {
  return !some(pred, coll);
}
