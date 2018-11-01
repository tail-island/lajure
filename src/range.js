/**
 * 範囲を表現するイテレーターを返します。
 *
 * @param {number[]} args - []か[end]、[start, end]、[start, end step]のどれか。startのデフォルト値は0、stepのデフォルト値は1、endのデフォルト値は無限
 *
 * @return {iterator} 範囲のイテレーター
 *
 * @example
 * range();         // [0, 1, 2, 3, ...]のイテレーター
 * range(5);        // [0, 1, 2, 3, 4]のイテレーター
 * range(1, 5);     // [1, 2, 3, 4]のイテレーター
 * range(1, 5, 2);  // [1, 3]のイテレーター
 */
export default function* range(...args) {
  const [start, end, step] = (() => {
    switch (args.length) {
    case 0:
      return [0, Infinity, 1];

    case 1:
      return [0, args[0], 1];

    case 2:
      return [args[0], args[1], 1];

    default:
      return args;
    }
  })();

  for (let x = start; x < end; x += step) {
    yield x;
  }
};
