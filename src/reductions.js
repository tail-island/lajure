import cons          from './cons';
import seq           from './seq';
import reducedSymbol from './reduce';

/**
 * reduceの途中経過も含めて、イテレーターで返します。
 *
 * @param {*[]} args - [f, init, coll]か[f, coll]のどちらか。
 *
 * @return {iterator} 途中経過も含めたreduceの結果のイテレーター
 *
 * @example
 * reduce((acc, x) => acc + x, [1, 2, 3]);  // [1, 3, 6]のイテレーター
 */
export default function* reductions(...args) {
  const [f, coll] = (() => {
    switch (args.length) {
    case 0:
      throw 'Invalid arguments';

    case 1:
      throw 'Invalid arguments';

    case 2:
      return args;

    default:
      return [args[0], cons(args[1], args[2])];
    }
  })();

  const iter = seq(coll);
  if (!iter) {
    return;
  }

  let acc = iter.next().value;

  for (const x of iter) {
    yield acc;

    acc = f(acc, x);

    if (acc && acc.hasOwnProperty(reducedSymbol)) {
      acc = acc[reducedSymbol];
      break;
    }
  }

  yield acc;
}
