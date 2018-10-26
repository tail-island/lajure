import sequence from './sequence';
import some     from './some';

export default function* interleave(...colls) {
  const iters = colls.map(sequence);

  for (;;) {
    const nexts = iters.map(iter => iter.next());
    if (nexts.some(next => next.done)) {
      break;
    }

    for (const next of nexts) {
      yield next.value;
    }
  }
}
