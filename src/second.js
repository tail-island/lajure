import nth from './nth';

/**
 * 2番目の要素を抽出します。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {*} 2番目の要素
 */
export default function second(coll) {
  return nth(coll, 1);
}
