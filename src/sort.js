import sequence from './sequence';

/**
 * ソートします。
 *
 * @param {*[]} args - [comp, coll]か[coll]。compが省略された場合は<演算子。
 *
 * @return {iterator} ソートされた集合のイテレーター
 *
 * @example
 * sort(                 [2, 3, 1]);  // [1, 2, 3]のイテレーター
 * sort((x, y) => x > y, [2, 3, 1]);  // [3, 2, 1]のイテレーター
 */
export default function sort(...args) {
  const [comp, coll] = (() => {
    switch (args.length) {
    case 0:
      throw 'Invalid arguments';

    case 1:
      return [(x, y) => x < y, args[0]];

    default:
      return args;
    }
  })();

  const _ = function(xs, l, r) {
    if (l < r) {
      let i = l;
      let j = r;

      let pivot = comp(xs[i], xs[j]) ? xs[j] : xs[i];

      for (;;) {
        while (comp(xs[i], pivot)) {
          i++;
        }
        while (comp(pivot, xs[j])) {
          j--;
        }

        if (i >= j) {
          break;
        }

        const temp = xs[i]; xs[i] = xs[j]; xs[j] = temp;

        i++;
        j--;
      }

      _(xs, l, i - 1);
      _(xs, j + 1, r);
    }
  };

  const xs = Array.from(coll);

  _(xs, 0, xs.length - 1);

  return sequence(xs);
}
