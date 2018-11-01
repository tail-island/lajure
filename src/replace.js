import map from './map';

/**
 * 集合の要素をマップの値で置き換えます。
 *
 * @param {Map} smap - 要素の置き換え規則のマップ
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 置き換えられた集合のイテレーター
 *
 * @example
 * replace(new Map([[0, 'zero'], [1, 'one'], [2, 'two']]), range(3));  // ['zero', 'one', 'two']のイテレーター
 */
export default function replace(smap, coll) {
  return map(x => smap.get(x), coll);
}
