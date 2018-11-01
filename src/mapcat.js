import apply  from './apply';
import concat from './concat';
import map    from './map';

/**
 * mapした結果をconcatします。apply(concat, map(f, coll))と同じです。
 *
 * @param {function} f - 集合の要素に対して実行する関数
 * @param {*[][] | iterator[]} colls - 集合
 *
 * @return {iterator} 関数の戻り値をconcatした集合のイテレーター
 *
 * @example
 * mapcat(e => e.canUseLanguages(), getEmployees());  // 社員が使用できる言語の集合。イテレーターのイテレーターにならずに、イテレーターになります
 */
export default function mapcat(f, ...colls) {
  return apply(concat, map(f, ...colls));
}
