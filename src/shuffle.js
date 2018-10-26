export default function* shuffle(coll) {
  const xs = Array.from(coll);

  while (xs.length > 0) {
    const r = Math.floor(Math.random() * xs.length);

    yield xs[r];

    xs[r] = xs[xs.length - 1];
    xs.pop();
  }
}
