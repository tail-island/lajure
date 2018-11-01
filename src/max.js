import rest from './rest';

/**
 * 引数の中で最大の値を返します。
 *
 * @param {*[]} xs - 値の集合
 *
 * @return {*} 最大の値
 */
export default function max(...xs) {
  if (xs.length === 0) {
    throw 'Invalid arguments';
  }

  let max = xs[0];

  for (const x of rest(xs)) {
    if (x > max) {
      max = x;
    }
  }

  return max;
}
