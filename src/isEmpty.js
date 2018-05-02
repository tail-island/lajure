export default function isEmpty(coll) {
  if (coll[Symbol.iterator]().next().done) {
    return true;
  }

  return false;
}
