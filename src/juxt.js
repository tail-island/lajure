import isSequencial from './isSequencial';
import map          from './map';
import tee          from './tee';

/**
 * 引数で指定した関数群の戻り値の集合へのイテレーターを返す関数を生成します。
 *
 * @param {function[]} fs - 関数
 *
 * @return {function} fsの関数を実行した結果へのイテレーターを返す関数
 *
 * @example
 * const [x, iter] = juxt(first, next)([1, 2, 3]);
 * // x    == 1
 * // iter == [2, 3]のイテレーター
 */
export default function juxt(...fs) {
  return function(...args) {
    if (args.length === 1 && isSequencial(args[0])) {
      return map((f, coll) => f(coll), fs, tee(fs.length, args[0]));
    }

    return map(f => f(...args), fs);
  };
}
