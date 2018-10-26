import sequence from './sequence';

export default function* dropWhile(pred, coll) {
  let b = false;

  for (const x of sequence(coll)) {
    if (!b) {
      if (pred(x)) {
        continue;
      }

      b = true;
    }

    yield x;
  }
}
