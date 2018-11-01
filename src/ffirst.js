import first from './first';

/**
 * 集合の最初の要素の最初の要素を返します。first(first(xoll))と同じです。
 *
 * @param {*[][] | iterator | null} coll - 集合の集合
 *
 * @return {*} 最初の要素の最初の要素
 */
export default function ffirst(coll) {
  return first(first(coll));
}
