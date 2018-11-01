/**
 * 関数に引数を部分適用します。
 *
 * @param {function} f - 関数
 * @param {*[]} args - 引数
 *
 * @return {function} 引数が部分適用された関数
 *
 * @example
 * const multiples = (x) => iterate(y => y + x, x);  // xの倍数のイテレーターを返す関数
 * const multiplesOf5 = partial(multiples, 5);       // [5, 10, 15, 20, 25...]のイテレーターを返す関数
 */
export default function partial(f, ...args) {
  return (...moreArgs) => f(...args, ...moreArgs);
}
