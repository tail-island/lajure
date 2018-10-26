export default function randNth(coll) {
  const xs = Array.from(coll);

  return xs[Math.floor(Math.random() * xs.length)];
}
