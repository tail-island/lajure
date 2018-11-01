import partition from './partition';
import reduce    from './reduce';

/**
 * 値と、条件と関数のペアの集合をとり、条件が真の場合は値を引数に関数を実行した戻り値を返します。条件が偽の場合は値をそのまま返します。
 * さらに条件と関数のペアがある場合は、条件が真の場合は一つ前の結果を引数にして関数を実行します。条件が儀の場合は、一つ前の処理の結果をそのまま返します。
 *
 * @param {*} x - 値
 * @param {*[]} clauses - 条件, 関数, 条件, 関数...と続く集合
 *
 * @return {*} 最後の条件が真なら最後の関数の戻り値、そうでなければ一つ前の関数の戻り値。そうでなければ更に一つ前の関数の戻り値。
 *
 * @example
 * return condCall(developer,
 *                 developer.isJavaScripter(), raiseSalary);
 * // = return developer.isJavaScripter() ? raiseSalary(developer) : developer;  // 偽の場合のコードの記述が不要になって、便利なはず。
 */
export default function condCall(x, ...clauses) {
  return reduce((acc, [test, f]) => test ? f(acc) : acc, x, partition(2, clauses));
}
