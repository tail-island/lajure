import isSequencial from './isSequencial';
import sequence     from './sequence';

export default function flatten(coll) {
  if (!isSequencial(coll)) {
    return sequence(null);
  }

  const _ = function*(x) {
    for (const y of x) {
      if (!isSequencial(y)) {
        yield y;

      } else {
        for (const z of _(y)) {
          yield z;
        }
      }
    }
  };

  return _(coll);
}
