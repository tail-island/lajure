import pipe    from './pipe';
import reverse from './reverse';

export default function comp(...fs) {
  return pipe(...reverse(fs));
}
