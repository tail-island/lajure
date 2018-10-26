import seq from './seq';

export default function nth(coll, n) {
  const iter = seq(coll);
  if (!iter) {
    return null;
  }

  let next = undefined;
  for (let i = 0; i <= n; ++i) {
    next = iter.next();
    if (next.done) {
      return null;
    }
  }

  return next.value;
}
