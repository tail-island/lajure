import seq      from './seq';
import sequence from './sequence';

/**
 * 集合の2番目の要素から最後の要素までのイテレーターを返します。集合の要素数が2未満の場合は、nullを返します。空集合のイテレーターが必要な場合は、restを使用してください。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator | null} 集合の2番目の要素から最後の要素までのイテレーター、またはnull
 */
export default function next(coll) {
  const iter = sequence(coll);

  iter.next();

  return seq(iter);
}
