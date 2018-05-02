import reduce  from './reduce';
import reduced from './reduced';

export default function someCall(x, ...fs) {
  return reduce((acc, f) => {
    const nextAcc = f(acc);

    if (nextAcc === null || nextAcc === undefined) {
      return reduced(nextAcc);
    }

    return acc;
  }, x, fs);
}
