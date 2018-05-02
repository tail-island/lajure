import map from './map';
import tee from './tee';

export default function juxt(...fs) {
  return function(...args) {
    if (args.length === 1 && args[0][Symbol.iterator]) {
      return map((f, coll) => f(coll), fs, tee(fs.length, args[0][Symbol.iterator]()));
    }

    return map(f => f(...args), fs);
  };
}
