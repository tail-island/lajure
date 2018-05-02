import complement from './complement';
import filter     from './filter';

export default function remove(pred, coll) {
  return filter(complement(pred), coll);
}
