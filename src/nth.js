import seq from './seq';

/**
 * 集合のn番目の要素を取得します。
 *
 * @param {*[] | iterator | null} coll - 集合
 * @param {number} n - 何番目の要素を取得したいか
 *
 * @return {* | null} n番目の要素。要素が存在しない場合はnull
 */
export default function nth(coll, n) {
  const iter = seq(coll);
  if (!iter) {
    return null;
  }

  let next = undefined;
  for (let i = 0; i <= n; ++i) {
    next = iter.next();
    if (next.done) {
      return null;
    }
  }

  return next.value;
}
