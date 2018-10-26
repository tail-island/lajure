import sequence from './sequence';

export default function every(pred, coll) {
  for (const x of sequence(coll)) {
    if (!pred(x)) {
      return false;
    }
  }

  return true;
}
