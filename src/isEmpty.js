import seq from './seq';

/**
 * 集合が空か調べます。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {boolean} 集合が空ならtrue、そうでなければfalse
 */
export default function isEmpty(coll) {
  if (!seq(coll)) {
    return true;
  }

  return false;
}
