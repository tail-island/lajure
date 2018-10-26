import sequence from './sequence';

export default function* take(n, coll) {
  const iter = sequence(coll);

  for (let i = 0; i < n; ++i) {
    const next = iter.next();
    if (next.done) {
      break;
    }

    yield next.value;
  }
}
