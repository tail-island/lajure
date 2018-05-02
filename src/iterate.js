export default function* iterate(f, x) {
  yield x;

  for (;;) {
    x = f(x);

    yield x;
  }
}
