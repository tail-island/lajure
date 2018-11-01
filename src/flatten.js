import isSequencial from './isSequencial';
import sequence     from './sequence';

/**
 * 集合の集合を集合に変換し、そのイテレーターを返します。
 *
 * @param {*[][] | iterator | null} coll - 集合の集合
 *
 * @return 集合のイテレーター
 *
 * @example
 * flatten([1, 2, [3, 4, [5, 6], 7], 8]);  // [1, 2, 3, 4, 5, 6, 7, 8]のイテレーター
 */
export default function flatten(coll) {
  if (!isSequencial(coll)) {
    return sequence(null);
  }

  const _ = function*(x) {
    for (const y of x) {
      if (!isSequencial(y)) {
        yield y;

      } else {
        for (const z of _(y)) {
          yield z;
        }
      }
    }
  };

  return _(coll);
}
