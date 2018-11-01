import cons from './cons';
import seq  from './seq';

/**
 * reduced向けのシンボルです。使用しないでください。
 */
export const reducedSymbol = Symbol('reduced');

/**
 * 畳み込みます。f(f(f(init, coll[0]), coll[1]), coll[2])...の結果を返します。
 *
 * @param {*[]} args - [f, init, coll]か[f, coll]のどちらか。
 *
 * @return {*} 畳み込まれた値
 *
 * @example
 * reduce((acc, x) => acc + x, xs);  // xsの合計
 */
export default function reduce(...args) {
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
    return null;
  }

  let acc = iter.next().value;

  for (const x of iter) {
    acc = f(acc, x);

    if (acc && acc.hasOwnProperty(reducedSymbol)) {
      acc = acc[reducedSymbol];
      break;
    }
  }

  return acc;
}
