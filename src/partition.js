export default function* partition(n, coll) {
  let xs = [];

  for (const x of coll) {
    xs.push(x);
    if (xs.length === n) {
      yield xs;

      xs = [];
    }
  }
}
