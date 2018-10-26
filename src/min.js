import rest from './rest';

export default function min(...xs) {
  if (xs.length === 0) {
    throw 'Invalid arguments';
  }

  let min = xs[0];

  for (const x of rest(xs)) {
    if (x < min) {
      min = x;
    }
  }

  return min;
}
