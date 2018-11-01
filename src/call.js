import pipe from './pipe';

/**
 * 指定された引数を使用して最初の関数を呼び出し、その結果を引数に次の関数を呼び出します。引数にコードの一部を使用したい場合は、tCallマクロを使用してください。
 *
 * @param {*} x - 最初の関数の引数
 * @param {function[] | iterator} fs - 順番に呼び出す関数の集合
 *
 * @return {*} 最後の関数の戻り値
 *
 * @example
 * call(x, foo, bar);
 * // = bar(foo(x));
 *
 * @example
 * tCall(iterate(inc, 1),
 *       takeWhile(x => x < 10),
 *       filter(x => x % 2));
 *
 * // = call(iterate(inc, 1), xs => takeWhile(x => x < 10, xs), xs => filter(x => x % 2, xs))
 * // = filter(x => x % 2, takeWhile(x => x < 10, iterate(inc, 1)))
 */
export default function call(x, ...fs) {
  return pipe(...fs)(x);
}
