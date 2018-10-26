import map from './map';

export default function replace(smap, coll) {
  return map(x => smap.get(x), coll);
}
