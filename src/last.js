import seq from './seq';

export default function last(coll) {
  const iter = seq(coll);
  if (!iter) {
    return null;
  }

  let prev = iter.next().value;
  for (const x of iter) {
    prev = x;
  }

  return prev;
}
