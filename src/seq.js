import cons from './cons';

export default function seq(coll) {
  if (coll === null) {
    return null;
  }

  const iter = coll[Symbol.iterator]();

  const next = iter.next();
  if (next.done) {
    return null;
  }

  return cons(next.value, iter);
}
