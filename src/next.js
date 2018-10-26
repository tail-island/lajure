import seq      from './seq';
import sequence from './sequence';

export default function next(coll) {
  const iter = sequence(coll);

  iter.next();

  return seq(iter);
}
