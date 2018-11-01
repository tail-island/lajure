/**
 * 引数の値をそのまま返します。文法上関数を指定しなければならないのだけどやる処理がない場合に使用してください。
 *
 * @param {*} x - 返したい値
 *
 * @return 引数の値
 *
 * @example
 * juxt(identity, reverse)(range(3)]);  // [[0, 1, 2]のイテレーター, [2, 1, 0]のイテレーター]
 */
export default function identity(x) {
  return x;
}
