import partition from './partition';
import reduce    from './reduce';

export default function condCall(x, ...clauses) {
  return reduce((acc, [test, f]) => test ? f(acc) : acc, x, partition(2, clauses));
}
