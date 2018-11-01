import rseq     from './rseq';
import sequence from './sequence';

/**
 * 集合の要素を逆順にします。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 逆順の集合のイテレーター
 */
export default function reverse(coll) {
  return sequence(rseq(Array.from(sequence(coll))));
}
