import reduce from './reduce';

/**
 * 最初の関数の戻り値を入力にして次の関数を実行、その戻り値を入力にしてその次の関数を実行……のように、関数をパイプで接続して実行する関数を生成します。
 *
 * @param {function[]} fs - 関数
 *
 * @return {function} 生成された関数
 */
export default function pipe(...fs) {
  return (x) => reduce((acc, f) => f(acc), x, fs);
}
