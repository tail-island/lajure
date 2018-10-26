import cons from './cons';
import seq  from './seq';

export const reducedSymbol = Symbol('reduced');

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
