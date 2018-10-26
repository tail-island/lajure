import sequence from './sequence';

export default function rest(coll) {
  const iter = sequence(coll);

  iter.next();

  return iter;
}
