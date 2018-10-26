import sequence from './sequence';

export default function* takeNth(n, coll) {
  let i = 0;

  for (const x of sequence(coll)) {
    if (i++ % n === 0) {
      yield x;
    }
  }
}
