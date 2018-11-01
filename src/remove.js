import complement from './complement';
import filter     from './filter';

/**
 * 条件を満たす要素を除いた集合のイテレーターを返します。
 *
 * @param {function} pred - 条件
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 条件を満たす要素が覗かれた集合のイテレーター
 */
export default function remove(pred, coll) {
  return filter(complement(pred), coll);
}
