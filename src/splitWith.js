import dropWhile from './dropWhile';
import juxt      from './juxt';
import partial   from './partial';
import sequence  from './sequence';
import takeWhile from './takeWhile';

export default function splitWith(pred, coll) {
  return juxt(partial(takeWhile, pred), partial(dropWhile, pred))(sequence(coll));
}
