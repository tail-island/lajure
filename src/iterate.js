/**
 * 初期値、初期値を引数に関数を呼び出した戻り値、その戻り値を引数に関数を呼び出した戻り値……のイテレーターを返します。
 *
 * @param {function} f - 関数
 * @param {*} x - 初期値
 *
 * @return [x, f(x), f(f(x)), f(f(f(x)))...]のイテレーター
 *
 * @example
 * iterate(inc, 1);  // すべての自然数
 */
export default function* iterate(f, x) {
  yield x;

  for (;;) {
    x = f(x);

    yield x;
  }
}
