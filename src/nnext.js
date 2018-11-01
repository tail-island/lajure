import next from './next';

/**
 * 集合の2番目以降の要素の2番目以降の要素（つまり3番目以降の要素）を返します。next(next(coll))と同じです。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator | null} 集合の最初の要素の2番目の要素から最後の要素までのイテレーター
 */
export default function nnext(coll) {
  return next(next(coll));
}
