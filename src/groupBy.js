import sequence from './sequence';

export default function groupBy(f, coll) {
  const map = new Map();

  for (const x of sequence(coll)) {
    const k = f(x);

    if (map.has(k)) {
      map.get(k).push(x);
    } else {
      map.set(k, [x]);
    }
  }

  return map;
}
