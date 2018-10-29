import every from './every';

export default function notEvery(pred, coll) {
  return !every(pred, coll);
}
