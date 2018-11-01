import sequence from './sequence';
import some     from './some';

/**
 * 1つ目の集合の最初の要素、2つ目の集合の最初の要素……、1つ目の要素の2番目の要素、2つ目の要素の2番目の要素……という集合のイテレーターを返します。
 *
 * @param {*[][] | iterator[]} colls - 集合の集合
 *
 * @return 集合のイテレーター
 *
 * @example
 * iterleave([0, 1, 2], [3, 4, 5], [6, 7, 8]);  // [0, 3, 6, 1, 4, 7, 2, 5, 8]のイテレーター
 */
export default function* interleave(...colls) {
  const iters = colls.map(sequence);

  for (;;) {
    const nexts = iters.map(iter => iter.next());
    if (nexts.some(next => next.done)) {
      break;
    }

    for (const next of nexts) {
      yield next.value;
    }
  }
}
