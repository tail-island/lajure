import seq from './seq';

/**
 * 配列を逆順に辿るイテレーターを返します。
 *
 * @param {*[]} coll - 配列
 *
 * @return {iterator | null} イテレーター。配列が空の場合はnull
 */
export default function rseq(coll) {
  if (!Array.isArray(coll)) {
    throw 'Invalid arguments';
  }

  return seq(function*() {
    for (let i = coll.length - 1; i >= 0; --i) {
      yield coll[i];
    }
  }());
}
