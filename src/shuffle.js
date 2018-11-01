/**
 * 集合をシャッフルします。
 *
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return {iterator} シャッフルされた集合のイテレーター
 */
export default function* shuffle(coll) {
  const xs = Array.from(coll);

  while (xs.length > 0) {
    const r = Math.floor(Math.random() * xs.length);

    yield xs[r];

    xs[r] = xs[xs.length - 1];
    xs.pop();
  }
}
