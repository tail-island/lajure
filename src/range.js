export default function* range(...args) {
  const [start, end, step] = (() => {
    switch (args.length) {
    case 0:
      return [0, Infinity, 1];

    case 1:
      return [0, args[0], 1];

    case 2:
      return [args[0], args[1], 1];

    default:
      return args;
    }
  })();

  for (let x = start; x < end; x += step) {
    yield x;
  }
};
