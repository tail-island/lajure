export default function* conj(coll, x) {
  for (const y of coll) {
    yield y;
  }

  yield x;
}
