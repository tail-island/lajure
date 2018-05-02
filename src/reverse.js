export default function reverse(coll) {
  return Array.from(coll).reverse()[Symbol.iterator]();
}
