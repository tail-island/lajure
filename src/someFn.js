import some from './some';

/**
 * 引数で指定される条件を一つでも満たすかを確認する関数を生成します。
 *
 * @param {function[]} fs - 関数
 *
 * @return {function} 生成された関数
 */
export default function someFn(...fs) {
  return (...args) => some(f => f(...args), fs);
}
