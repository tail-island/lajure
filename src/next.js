export default function next(coll) {
  const iter = coll[Symbol.iterator]();

  iter.next();

  return iter;
}
