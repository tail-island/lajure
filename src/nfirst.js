import first from './first';
import next  from './next';

export default function nfirst(coll) {
  return next(first(coll));
}
