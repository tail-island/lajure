import rest from './rest';

export default function max(...xs) {
  if (xs.length === 0) {
    throw 'Invalid arguments';
  }

  let max = xs[0];

  for (const x of rest(xs)) {
    if (x > max) {
      max = x;
    }
  }

  return max;
}
