import seq from './seq';

export default function* dedupe(coll) {
  const iter = seq(coll);
  if (!iter) {
    return;
  }

  let prev = iter.next().value;
  yield prev;

  for (const x of iter) {
    if (x !== prev) {
      yield x;

      prev = x;
    }
  }
}
