import seq from './seq';

export default function* interpose(sep, coll) {
  const iter = seq(coll);
  if (!iter) {
    return;
  }

  yield iter.next().value;

  for (const x of iter) {
    yield sep;
    yield x;
  }
}
