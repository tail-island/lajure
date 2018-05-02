export default function complement(f) {
  return (...args) => !f(...args);
}
