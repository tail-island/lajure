import reduce from './reduce';
import rest   from './rest';

/**
 * k(x)が最小のxを返します。
 *
 * @param {funciton} k - 比較対象のキーを取得する関数
 * @param {*[]} xs - 値の集合
 *
 * @return {*} k(x)が最小のx
 *
 * @example
 * minKey(e => e.getSalary(), a, b, c);  // 最も給料が低い社員
 */
export default function maxKey(k, ...xs) {
  if (xs.length === 0) {
    throw 'Invalid arguments';
  }

  return reduce((acc, x) => {
    if (k(x) < acc[0]) {
      return [k(x), x];
    }

    return acc;
  }, [k(xs[0]), xs[0]], rest(xs))[1];
}
