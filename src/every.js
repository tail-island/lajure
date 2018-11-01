import sequence from './sequence';

/**
 * 集合のすべての要素が条件を満たすか確認します。
 *
 * @param {function} pred - 条件
 * @param {*[] | iterator | null } coll - 集合
 *
 * @return {boolean} すべての要素が条件を満たす場合はtrue、そうでなければfalse
 */
export default function every(pred, coll) {
  for (const x of sequence(coll)) {
    if (!pred(x)) {
      return false;
    }
  }

  return true;
}
