import sequence from './sequence';

/**
 * 最後のn個の要素を削除したイテレーターを返します。
 *
 * @param {*[]} args - [n, coll]もしくは[coll]。collのみが指定された場合、nは1になります。
 *
 * @return {iterator} 最後のn個の要素が削除された集合のイテレーター
 *
 * @example
 * dropLast(2, range(5));  // [0, 1, 2]のイテレーター
 * dropLast(   range(5));  // [0, 1, 2, 3]のイテレーター
 */
export default function* dropLast(...args) {
  const [n, coll] = (() => {
    switch (args.length) {
    case 0:
      throw 'Invalid arguments';

    case 1:
      return [1, args[0]];

    default:
      return args;
    }
  })();

  const xs = [];

  for (const x of sequence(coll)) {
    xs.push(x);

    if (xs.length > n) {
      yield xs[0];

      xs.shift();
    }
  }
}
