import map   from './map';
import range from './range';

export default function mapIndexed(f, coll) {
  return map(f, range(), coll);
}
