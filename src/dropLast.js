import sequence from './sequence';

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
