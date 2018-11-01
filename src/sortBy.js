import sort from './sort';

/**
 * 関数の戻り値でソートします。
 *
 * @param {*[]} args - [keyfn, comp, coll]か[keyfn, coll]。compが省略された場合は<演算子。
 *
 * @return {iterator} ソートされた集合のイテレーター
 *
 * @example
 * sortBy(x => x.getAge(), xs);  // 年齢順でソート
 */
export default function sortBy(...args) {
  const [keyfn, comp, coll] = (() => {
    switch (args.length) {
    case 0:
      throw 'Invalid arguments';

    case 1:
      throw 'Invalid arguments';

    case 2:
      return [args[0], (x, y) => x < y, args[1]];

    default:
      return args;
    }
  })();

  return sort((x, y) => comp(keyfn(x), keyfn(y)), coll);
}
