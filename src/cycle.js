import seq from './seq';

export default function* cycle(coll) {
  const iter = seq(coll);
  if (!iter) {
    return;
  }

  const xs = [];
  for (const x of iter) {
    xs.push(x);

    yield x;
  }

  for (;;) {
    for (const x of xs) {
      yield x;
    }
  }
}
