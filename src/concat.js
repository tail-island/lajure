import sequence from './sequence';

export default function* concat(...xs) {
  for (const ys of xs) {
    for (const y of sequence(ys)) {
      yield y;
    }
  }
}
