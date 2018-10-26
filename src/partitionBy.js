import seq      from './seq';
import sequence from './sequence';

export default function* partitionBy(f, coll) {
  const iter = seq(coll);
  if (!iter) {
    return sequence(null);
  }

  const next = iter.next();

  let xs   = [next.value];
  let prev = f(next.value);

  for (const x of iter) {
    const r = f(x);
    if (r != prev) {
      yield xs;

      xs = [];
      prev = r;
    }

    xs.push(x);
  }

  if (xs.length > 0) {
    yield xs;
  }
}
