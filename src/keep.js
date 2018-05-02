export default function* keep(f, coll) {
  for (const x of coll) {
    const fx = f(x);

    if (fx !== null && fx !== undefined) {
      yield fx;
    }
  }
}
