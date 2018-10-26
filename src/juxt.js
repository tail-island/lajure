import isSequencial from './isSequencial';
import map          from './map';
import tee          from './tee';

export default function juxt(...fs) {
  return function(...args) {
    if (args.length === 1 && isSequencial(args[0])) {
      return map((f, coll) => f(coll), fs, tee(fs.length, args[0]));
    }

    return map(f => f(...args), fs);
  };
}
