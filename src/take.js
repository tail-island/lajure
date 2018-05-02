export default function* take(n, coll) {
  const iter = coll[Symbol.iterator]();

  for (let i = 0; i < n; ++i) {
    const next = iter.next();
    if (next.done) {
      break;
    }

    yield next.value;
  }
}
