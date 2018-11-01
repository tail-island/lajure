import mapIndexed from './mapIndexed';

/**
 * 集合を分割します。partitionとは異なり、分割した余りも返します。
 *
 * @param {*[]} args - [n、step、coll]。nは要素数、stepは分割する位置（省略した場合はnと同じ）、collは集合。
 *
 * @return {iterator} 分割された集合のイテレーター
 *
 * @example
 * partition(3,    [0, 1, 2, 3, 4, 5, 6, 7]);  // [[0, 1, 2], [3, 4, 5], [7]]のイテレーター
 * partition(3, 4, [0, 1, 2, 3, 4, 5, 6, 7]);  // [[0, 1, 2], [4, 5, 6]]のイテレーター
 * partition(3, 2, [0, 1, 2, 3, 4, 5, 6, 7]);  // [[0, 1, 2], [2, 3, 4], [4, 5, 6], [6, 7]]のイテレーター
 */
export default function* partitionAll(...args) {
  const [n, step, coll] = (() => {
    switch (args.length) {
    case 0:
      throw 'Invalid arguments';

    case 1:
      throw 'Invalid arguments';

    case 2:
      return [args[0], args[0], args[1]];

    default:
      return args;
    }
  })();

  const xss = [];

  for (const [i, x] of mapIndexed(Array.of, coll)) {
    if (i % step === 0) {
      xss.push([]);
    }

    if (xss.length > 0) {
      for (const xs of xss) {
        xs.push(x);
      }

      if (xss[0].length === n) {
        yield xss[0];

        xss.shift();
      }
    }
  }

  if (xss.length > 0) {
    yield xss[0];
  }
}
