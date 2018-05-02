export default function* concat(...xs) {
  for (const ys of xs) {
    for (const y of ys) {
      yield y;
    }
  }
}
