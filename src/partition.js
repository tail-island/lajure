import mapIndexed from './mapIndexed';

/**
 * 集合を分割します。分割した余りは返されません。
 *
 * @param {*[]} args - [n、step、pad、coll]。nは要素数、stepは分割する位置（省略した場合はnと同じ）、padは要素が不足した場合に追加する値（省略した場合はnull）、collは集合。
 *
 * @return {iterator} 分割された集合のイテレーター
 *
 * @example
 * partition(3,               [0, 1, 2, 3, 4, 5, 6, 7]);  // [[0, 1, 2], [3, 4, 5]]のイテレーター
 * partition(3, 4,            [0, 1, 2, 3, 4, 5, 6, 7]);  // [[0, 1, 2], [4, 5, 6]]のイテレーター
 * partition(3, 2,            [0, 1, 2, 3, 4, 5, 6, 7]);  // [[0, 1, 2], [2, 3, 4], [4, 5, 6]]のイテレーター
 * partition(3, 3, [0, 0, 0], [0, 1, 2, 3, 4, 5, 6, 7]);  // [[0, 1, 2], [3, 4, 5], [6, 7, 0]]のイテレーター
 */
export default function* partition(...args) {
  const [n, step, pad, coll] = (() => {
    switch (args.length) {
    case 0:
      throw 'Invalid arguments';

    case 1:
      throw 'Invalid arguments';

    case 2:
      return [args[0], args[0], null, args[1]];

    case 3:
      return [args[0], args[1], null, args[2]];

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

  if (pad && xss.length > 0) {
    yield xss[0].concat(pad).slice(0, n);
  }
}
