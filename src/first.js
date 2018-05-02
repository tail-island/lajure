export default function first(coll) {
  return coll[Symbol.iterator]().next().value;
}
