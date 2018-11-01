import sequence from './sequence';

/**
 * 集合の先頭に要素を追加し、イテレーターを返します。
 *
 * @param {*} x - 追加する要素
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 先頭に要素が追加された集合のイテレーター
 *
 * @example
 * // 無限に続くフィボナッチ数列
 * functon getFibonacciNumbers(x, y) {
 *   return cons(x, lazySeq(getFibonacciNumbers(y, x + y)));
 * }
 */
export default function* cons(x, coll) {
  yield x;

  for (const y of sequence(coll)) {
    yield y;
  }
}
