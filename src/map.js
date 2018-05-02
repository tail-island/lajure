import some from './some';

export default function* map(f, ...colls) {
  if (colls.length === 1) {
    for (const x of colls[0]) {
      yield f(x);
    }

  } else {
    const iters = colls.map(coll => coll[Symbol.iterator]());

    for (;;) {
      const nexts = iters.map(iter => iter.next());
      if (nexts.some(next => next.done)) {
        break;
      }

      yield (f(...nexts.map(next => next.value)));
    }
  }
}
