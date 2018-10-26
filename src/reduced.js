import {reducedSymbol} from './reduce';

export default function reduced(x) {
  return {[reducedSymbol]: x};
}
