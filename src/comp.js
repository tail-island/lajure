import pipe    from './pipe';
import reverse from './reverse';

/**
 * 関数を合成します。
 *
 * @param {function[] | iterator} fs - 合成したい関数の集合
 *
 * @return {function} 合成された関数。
 *
 * @example
 * comp(foo, bar);
 * // = x => foo(bar(x));
 */
export default function comp(...fs) {
  return pipe(...reverse(fs));
}
