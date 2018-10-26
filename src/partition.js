import mapIndexed from './mapIndexed';

export default function* partition(...args) {
  const [n, step, pad, coll] = (() => {
    switch (args.length) {
    case 0:
      throw 'Invalid arguments';

    case 1:
      throw 'Invalid arguments';

    case 2:
      return [args[0], args[0], null, args[1]];

    case 3:
      return [args[0], args[1], null, args[2]];

    default:
      return args;
    }
  })();

  const xss = [];

  for (const [i, x] of mapIndexed(Array.of, coll)) {
    if (i % step === 0) {
      xss.push([]);
    }

    if (xss.length > 0) {
      for (const xs of xss) {
        xs.push(x);
      }

      if (xss[0].length === n) {
        yield xss[0];

        xss.shift();
      }
    }
  }

  if (pad && xss.length > 0) {
    yield xss[0].concat(pad).slice(0, n);
  }
}
