import map   from './map';
import range from './range';

/**
 * インデックスと集合の要素を引数に取る関数を実行した結果の集合のイテレーターを返します。map(f, range(), coll)と同じです。
 *
 * @param {function} f - インデックスと集合の要素を引数に取る関数
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 関数の実行結果の集合のイテレーター
 *
 * @example
 * map((i, e) => [i, e.favoriteLanguage()], getEmployees());  // インデックスと好きな言語の配列のシーケンス
 */
export default function mapIndexed(f, coll) {
  return map(f, range(), coll);
}
