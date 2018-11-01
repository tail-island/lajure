import sequence from './sequence';

/**
 * 集合の中に条件を満たすものがあるか確認します。条件は関数で指定し、最初に真になった関数の戻り値を返します。最後まで真にならなかった場合は、nullを返します。
 *
 * @param {function} pred - 条件
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {* | null} 最初に真となった関数の戻り値。すべてが偽だった場合はnull。
 */
export default function some(pred, coll) {
  for (const x of sequence(coll)) {
    const x_ = pred(x);
    if (x_) {
      return x_;
    }
  }

  return null;
}
