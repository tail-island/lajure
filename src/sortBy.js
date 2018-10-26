import sort from './sort';

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
