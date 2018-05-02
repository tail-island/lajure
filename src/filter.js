export default function* filter(pred, coll) {
  for (const x of coll) {
    if (pred(x)) {
      yield x;
    }
  }
}
