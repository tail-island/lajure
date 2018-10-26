import first from './first';
import next  from './next';

export default function fnext(coll) {
  return first(next(coll));
}
