/**
 * 指定した引数を返す関数を生成します。
 *
 * @param {*} x - 生成した関数が返す戻り値
 *
 * @return {function} 生成された関数
 */
export default function constantly(x) {
  return () => x;
}
