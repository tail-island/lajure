import seq from './seq';

/**
 * 集合の最後の要素を返します。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {*} 集合の最後の要素
 */
export default function last(coll) {
  const iter = seq(coll);
  if (!iter) {
    return null;
  }

  let prev = iter.next().value;
  for (const x of iter) {
    prev = x;
  }

  return prev;
}
