import apply    from './apply';
import cons     from './cons';
import first    from './first';
import identity from './identity';
import juxt     from './juxt';
import keep     from './keep';
import map      from './map';
import next     from './next';
import tee      from './tee';

export default function dedupe(coll) {
  const [coll1, coll2] = tee(2, coll);

  return cons(first(coll1),
              keep(identity, apply(map, (prev, x) => x !== prev ? x : null)(juxt(identity, next)(coll2))));
}
