import drop     from './drop';
import juxt     from './juxt';
import partial  from './partial';
import sequence from './sequence';
import take     from './take';

export default function splitAt(n, coll) {
  return juxt(partial(take, n), partial(drop, n))(sequence(coll));
}
