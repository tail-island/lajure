import sequence from './sequence';

export default function count(coll) {
  let i = 0;

  for (const _ of sequence(coll)) {
    i++;
  }

  return i;
}
