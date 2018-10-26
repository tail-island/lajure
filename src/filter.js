import sequence from './sequence';

export default function* filter(pred, coll) {
  for (const x of sequence(coll)) {
    if (pred(x)) {
      yield x;
    }
  }
}
