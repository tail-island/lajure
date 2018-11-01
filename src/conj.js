import sequence from './sequence';

/**
 * 集合の最後に要素を追加し、イテレーターを返します。Clojureのconjとは異なり、コレクションではなくイテレーターを返します。
 *
 * @param {*[] | iterator | null} coll - 集合
 * @param {*} x - 追加する要素
 *
 * @return {iterator} 最後に要素が追加された集合のイテレーター
 */
export default function* conj(coll, x) {
  for (const y of sequence(coll)) {
    yield y;
  }

  yield x;
}
