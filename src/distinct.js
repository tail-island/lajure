export default function* distinct(coll) {
  const seen = new Set();

  for (const x of coll) {
    if (!seen.has(x)) {
      seen.add(x);

      yield x;
    }
  }
}
