import apply from './apply';
import keep  from './keep';
import map   from './map';
import range from './range';

export default function keepIndexed(f, coll) {
  return keep(apply(f), map((i, x) => [i, x], range(), coll));
}
