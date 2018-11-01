import sequence from './sequence';

/**
 * 集合の要素を、指定した関数の引数に割り当てて呼び出します。foo(x, y)をargs = [1, 2]で呼び出す場合に、apply(foo, args)としてください。
 *
 * @param {function} f - 関数
 * @param {*[] | iterator | null} args - 関数の引数の集合
 *
 * @return {*} 関数fの戻り値
 *
 * @example
 * apply(foo, args);
 * // = foo(...args);
 *
 * @example
 * filter(partial(apply, foo), [[1, 2], [3, 4]]);
 * // = filter(args => foo(...args), [[1, 2], [3, 4]]);
 */
export default function apply(f, args) {
  return f(...sequence(args));
}
