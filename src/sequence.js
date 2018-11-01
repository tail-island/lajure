/**
 * 集合からイテレーターを取得します。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} イテレーター
 */
export default function sequence(coll) {
  if (coll === null) {
    return [][Symbol.iterator]();
  }

  return coll[Symbol.iterator]();
}
