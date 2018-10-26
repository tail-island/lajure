import seq from './seq';

export default function first(coll) {
  const iter = seq(coll);
  if (!iter) {
    return null;
  }

  return iter.next().value;
}
