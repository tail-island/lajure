import sequence from './sequence';

/**
 * 集合の2番目の要素から最後の要素までのイテレーターを返します。集合の要素数が2未満の場合は、空集合のイテレーターを返します。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 集合の2番目の要素から最後の要素までのイテレーター
 */
export default function rest(coll) {
  const iter = sequence(coll);

  iter.next();

  return iter;
}
