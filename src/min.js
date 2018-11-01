import rest from './rest';

/**
 * 引数の中で最小の値を返します。
 *
 * @param {*[]} xs - 値の集合
 *
 * @return {*} 最小の値
 */
export default function min(...xs) {
  if (xs.length === 0) {
    throw 'Invalid arguments';
  }

  let min = xs[0];

  for (const x of rest(xs)) {
    if (x < min) {
      min = x;
    }
  }

  return min;
}
