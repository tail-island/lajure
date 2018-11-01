/**
 * 関数を繰り返して実行し、その結果を返します。
 *
 * @param {*[]} args - [n, f]か[f]
 *
 * @return {iterator} 集合のイテレーター
 *
 * @example
 * repeatedly(   constantly(0));  // [0, 0, 0...]のイテレーター
 * repeatedly(3, constantly(0));  // [0, 0, 0]のイテレーター
 */
export default function* repeatedly(...args) {
  const [n, f] = (() => {
    switch (args.length) {
    case 0:
      throw 'Invalid arguments';

    case 1:
      return [Infinity, args[0]];

    default:
      return args;
    }
  })();

  for (let i = 0; i < n; ++i) {
    yield f();
  }
}
