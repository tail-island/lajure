import sequence from './sequence';

export default function takeLast(n, coll) {
  const xs = [];

  for (const x of sequence(coll)) {
    xs.push(x);

    if (xs.length > n) {
      xs.shift();
    }
  }

  return sequence(xs);
}
