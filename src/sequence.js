export default function sequence(coll) {
  if (coll === null) {
    return [][Symbol.iterator]();
  }

  return coll[Symbol.iterator]();
}
