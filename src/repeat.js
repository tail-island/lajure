export default function* repeat(...args) {
  const [n, x] = (() => {
    switch (args.length) {
    case 0:
      throw "Invalid arguments";

    case 1:
      return [Infinity, args[0]];

    default:
      return args;
    }
  })();

  for (let i = 0; i < n; ++i) {
    yield x;
  }
}
