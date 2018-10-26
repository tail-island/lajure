export default function isSequencial(x) {
  return x && x[Symbol.iterator];
}
