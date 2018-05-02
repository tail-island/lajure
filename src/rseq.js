import condCall from './condCall';

export default function* rseq(coll) {
  if (!Array.isArray(coll)) {
    throw 'Invalid arguments';
  }

  for (let i = coll.length - 1; i >= 0; --i) {
    yield coll[i];
  }
}
