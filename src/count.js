import sequence from './sequence';

/**
 * 集合に含まれる要素の数を返します。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {number} 集合に含まれる要素の数
 */
export default function count(coll) {
  let i = 0;

  for (const _ of sequence(coll)) {
    i++;
  }

  return i;
}
