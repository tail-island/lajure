import reduce from './reduce';
import rest   from './rest';

export default function maxKey(k, ...xs) {
  if (xs.length === 0) {
    throw 'Invalid arguments';
  }

  return reduce((acc, x) => {
    if (k(x) < acc[0]) {
      return [k(x), x];
    }

    return acc;
  }, [k(xs[0]), xs[0]], rest(xs))[1];
}
