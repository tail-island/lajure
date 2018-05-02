import cons   from './cons';
import first  from './first';
import juxt   from './juxt';
import next   from './next';
import tee    from './tee';

export default function reduce(...args) {
  const [f, val, coll] = (() => {
    switch (args.length) {
    case 0:
      throw 'Invalid arguments';

    case 1:
      throw 'Invalid arguments';

    case 2:
      return cons(args[0], juxt(first, next)(args[1]));

    default:
      return args;
    }
  })();

  let acc = val;

  for (const x of coll) {
    acc = f(acc, x);

    if (acc.hasOwnProperty('@@reducedValue')) {
      acc = acc['@@reducedValue'];
      break;
    }
  }

  return acc;
}
