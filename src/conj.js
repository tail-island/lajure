import sequence from './sequence';

export default function* conj(coll, x) {
  for (const y of sequence(coll)) {
    yield y;
  }

  yield x;
}
