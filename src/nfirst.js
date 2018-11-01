import first from './first';
import next  from './next';

/**
 * 集合の最初の要素の2番目の要素から最後の要素までのイテレーターを返します。next(first(coll))と同じです。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator | null} 集合の最初の要素の2番目の要素から最後の要素までのイテレーター
 */
export default function nfirst(coll) {
  return next(first(coll));
}
