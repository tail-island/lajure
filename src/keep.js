/**
 * 集合の要素を引数に取る関数を実行した結果がnullでない場合の集合のイテレーターを返します。
 *
 * @param {function} f - 集合の要素を引数に取る関数
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 関数の実行結果がnullでない場合の集合のイテレーター
 *
 * @example
 * keep(x => x > 0 ? x * 2 : null, [-9 0 29 -7 45 3 -8]);  // [58, 90, 6]のイテレーター
 */
export default function* keep(f, coll) {
  for (const x of coll) {
    const fx = f(x);

    if (fx !== null && fx !== undefined) {
      yield fx;
    }
  }
}
