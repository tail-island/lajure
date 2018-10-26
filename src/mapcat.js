import apply  from './apply';
import concat from './concat';
import map    from './map';

export default function mapcat(f, ...colls) {
  return apply(concat)(map(f, ...colls));
}
