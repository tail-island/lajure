import sequence from './sequence';

export default function* takeWhile(pred, coll) {
  for (const x of sequence(coll)) {
    if (!pred(x)) {
      return;
    }

    yield x;
  }
}
