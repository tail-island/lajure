export default function* takeNth(n, coll) {
  let i = 0;

  for (const x of coll) {
    if (i++ % n === 0) {
      yield x;
    }
  }
}
