import nthrest from './nthrest';

export default function drop(n, coll) {
  return nthrest(coll, n);
}
