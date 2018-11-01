import {reducedSymbol} from './reduce';

/**
 * reduceを途中で終了させます。
 *
 * @param {*} x - reduceの戻り値となる値
 *
 * @return {object} reduceを途中で終了させるための内部データ
 *
 * @example
 * reduce((acc, x) => x > 10 ? acc : acc + x, range(1, 101));  // 55
 * reduce((acc, x) =>                acc + x, range(1, 101));  // 5050;
 */
export default function reduced(x) {
  return {[reducedSymbol]: x};
}
