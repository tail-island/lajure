import sequence from './sequence';

export default function* cons(x, coll) {
  yield x;

  for (const y of sequence(coll)) {
    yield y;
  }
}
