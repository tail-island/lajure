import comp     from './comp';
import sequence from './sequence';

/**
 * イテレーターが必要となったときまで、関数の実行を遅延します。lazySeqマクロを使用すれば、関数呼び出しをそのまま記述できます。
 *
 * @param {function} f - イテレーターまたはnullを返す関数
 *
 * @return 関数を遅延実行するイテラブル
 *
 * @example
 * // 無限に続くフィボナッチ数列
 * functon getFibonacciNumbers(x, y) {
 *   return cons(x, lazySeq(getFibonacciNumbers(y, x + y)));
 *   // = return cons(x, lazySeqFn(() => getFibonacciNumbers(y, x + y)));
 * }
 */
export default function lazySeqFn(f) {
  return {[Symbol.iterator]: comp(sequence, f)};
}
