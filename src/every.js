export default function every(pred, coll) {
  for (const x of coll) {
    if (!pred(x)) {
      return false;
    }
  }

  return true;
}
