export default function* cons(x, coll) {
  yield x;

  for (const y of coll) {
    yield y;
  }
}
