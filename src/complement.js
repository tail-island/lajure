/**
 * 引数の関数の戻り値の真偽を逆にした関数を生成します。
 *
 * @param {function} f - 真偽を返す関数
 *
 * @return {function} 戻り値の真偽が逆になった関数。
 *
 * @example
 * complement(isClojurian);
 * // = Clojurianでなければtrue、Clojurianならばfalseを返す関数
 */
export default function complement(f) {
  return (...args) => !f(...args);
}
