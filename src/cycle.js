import seq from './seq';

/**
 * 集合を繰り返した集合のイテレーターを返します。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} 集合を繰り返した集合のイテレーター
 *
 * @example
 * cycle([1, 2, 3]);  // [1, 2, 3, 1, 2, 3, ...]のイテレーター
 */
export default function* cycle(coll) {
  const iter = seq(coll);
  if (!iter) {
    return;
  }

  const xs = [];
  for (const x of iter) {
    xs.push(x);

    yield x;
  }

  for (;;) {
    for (const x of xs) {
      yield x;
    }
  }
}
