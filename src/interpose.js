import seq from './seq';

/**
 * 集合の要素の間にセパレーターを挟み込んだ集合のイテレーターを返します。
 *
 * @param {*} sep - セパレーター
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 集合の要素の間にセパレーターが挟み込まれた集合のイテレーター
 *
 * @example
 * interpose(0, range(1, 5));  // [1, 0, 2, 0, 3, 0, 4]のイテレーター
 */
export default function* interpose(sep, coll) {
  const iter = seq(coll);
  if (!iter) {
    return;
  }

  yield iter.next().value;

  for (const x of iter) {
    yield sep;
    yield x;
  }
}
