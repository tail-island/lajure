import sequence from './sequence';

export default function some(pred, coll) {
  for (const x of sequence(coll)) {
    const x_ = pred(x);
    if (x_) {
      return x_;
    }
  }

  return null;
}
