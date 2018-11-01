import cons from './cons';

/**
 * 集合からイテレーターを取得します。集合が空の場合はnullを返します。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator | null} イテレーター
 */
export default function seq(coll) {
  if (coll === null) {
    return null;
  }

  const iter = coll[Symbol.iterator]();

  const next = iter.next();
  if (next.done) {
    return null;
  }

  return cons(next.value, iter);
}
