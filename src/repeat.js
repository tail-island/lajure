/**
 * 値を繰り返す集合のイテレーターを返します。
 *
 * @param {*[]} args - [n, x]か[x]
 *
 * @return {iterator} 集合のイテレーター
 *
 * @example
 * repeat(   0);  // [0, 0, 0...]のイテレーター
 * repeat(3, 0);  // [0, 0, 0]のイテレーター
 */
export default function* repeat(...args) {
  const [n, x] = (() => {
    switch (args.length) {
    case 0:
      throw "Invalid arguments";

    case 1:
      return [Infinity, args[0]];

    default:
      return args;
    }
  })();

  for (let i = 0; i < n; ++i) {
    yield x;
  }
}
