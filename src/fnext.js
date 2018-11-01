import first from './first';
import next  from './next';

/**
 * 集合の2番目以降の要素の最初の要素（つまり2番目の要素）を返します。first(next(coll))と同じです。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return 集合の2番目以降の要素の最初の要素（つまり2番目の要素）
 */
export default function fnext(coll) {
  return first(next(coll));
}
