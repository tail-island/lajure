import count  from './count';
import filter from './filter';
import map    from './map';
import range  from './range';
import repeat from './repeat';

export default function tee(n, coll) {
  const iter = coll[Symbol.iterator]();

  const queue = [];
  const cupPositions = Array.from(repeat(n, 0));

  return map(function*(i) {
    for (;;) {
      const maxPosition = Math.max(...cupPositions);
      const minPosition = Math.min(...cupPositions);

      if (cupPositions[i] === maxPosition) {
        queue.push(iter.next());
      }

      const next = queue[cupPositions[i] - minPosition];
      if (next.done) {
        break;
      }

      if (cupPositions[i] === minPosition && count(filter(position => position === minPosition, cupPositions)) == 1) {
        queue.shift();
      }

      cupPositions[i]++;

      yield next.value;
    }
  }, range(n));
}
