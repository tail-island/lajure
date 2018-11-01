import every from './every';

/**
 * 引数で指定されるすべての条件を満たすかを確認する関数を生成します。
 *
 * @param {function[]} fs - 関数
 *
 * @return {function} 生成された関数
 *
 * @example
 * const isFizz = x => x % 3 === 0;
 * const isBuzz = x => x % 5 === 0;
 * const isFizzBuzz = everyPred(isFizz, isBuzz);
 * isFizzBuzz(15);  // true
 */
export default function everyPred(...fs) {
  return (...args) => every(f => f(...args), fs);
}
