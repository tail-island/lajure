export default function some(pred, coll) {
  for (const x of coll) {
    const x_ = pred(x);
    if (x_) {
      return x_;
    }
  }

  return false;
}
