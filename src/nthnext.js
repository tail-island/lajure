import seq      from './seq';
import sequence from './sequence';

export default function nthnext(coll, n) {
  const iter = sequence(coll);

  for (let i = 0; i < n; ++i) {
    iter.next();
  }

  return seq(iter);
}
