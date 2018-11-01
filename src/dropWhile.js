import sequence from './sequence';

/**
 * 先頭から続く条件を満たす要素を削除したイテレーターを返します。
 *
 * @param {function} pred - 削除する条件
 * @param {*[] | iterator | null} coll - 集合
 *
 * @return 先頭から続く条件を満たす要素が削除されたイテレーター
 *
 * @example
 * dropWhile(x => x < 2, [0, 1, 2, 3, 2, 1, 0]);  // [2, 3, 2, 1, 0]のイテレーター
 */
export default function* dropWhile(pred, coll) {
  let b = false;

  for (const x of sequence(coll)) {
    if (!b) {
      if (pred(x)) {
        continue;
      }

      b = true;
    }

    yield x;
  }
}
