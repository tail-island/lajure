import seq from './seq';

/**
 * 集合の最初の要素を返します。
 *
 * @param {*[] | iterator} coll - 集合
 *
 * @return {*} 最初の要素
 */
export default function first(coll) {
  const iter = seq(coll);
  if (!iter) {
    return null;
  }

  return iter.next().value;
}
