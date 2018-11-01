import apply   from './apply';
import keep    from './keep';
import map     from './map';
import partial from './partial';
import range   from './range';

/**
 * インデックスと集合の要素を引数に取る関数を実行した結果がnullでない場合の集合のイテレーターを返します。
 *
 * @param {function} f - インデックスと集合の要素を引数に取る関数
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 関数の実行結果がnullでない場合の集合のイテレーター
 *
 * @example
 * keepIndexed((i, x) => x > 0 ? i : null, [-9 0 29 -7 45 3 -8]);  // [2, 4, 5]のイテレーター
 */
export default function keepIndexed(f, coll) {
  return keep(partial(apply, f), map((i, x) => [i, x], range(), coll));
}
