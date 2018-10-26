import sequence from './sequence';

export default function nthrest(coll, n) {
  const iter = sequence(coll);

  for (let i = 0; i < n; ++i) {
    iter.next();
  }

  return iter;
}
