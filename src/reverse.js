import rseq     from './rseq';
import sequence from './sequence';

export default function reverse(coll) {
  return rseq(Array.from(sequence(coll)));
}
