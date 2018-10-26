import seq from './seq';

export default function butlast(coll) {
  return seq(function*() {
    const iter = seq(coll);
    if (!iter) {
      return;
    }

    let prev = iter.next().value;

    for (const x of iter) {
      yield prev;

      prev = x;
    }
  }());
}
