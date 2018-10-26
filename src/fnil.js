export default function fnil(f, ...defaultArgs) {
  return function(...args) {
    for (let i = 0; i < args.length; ++i) {
      if (args[i] === null) {
        args[i] = defaultArgs[i];
      }
    }

    return f(...args);
  };
}
