import reduce  from './reduce';
import reduced from './reduced';

/**
 * 指定された引数を使用して最初の関数を呼び出し、その結果を引数に次の関数を呼び出します。関数がnullを返した場合は、そこで処理を完了します。
 * 引数にコードの一部を使用したい場合は、tSomeCallマクロを使用してください。
 *
 * @param {*} x - 最初の関数の引数
 * @param {function[] | iterator} fs - 順番に呼び出す関数の集合
 *
 * @return {*} 最後、もくくはnullを返した関数の戻り値
 *
 * @example
 * someCall(employee,                                             // 社員の
 *          employee => employee.getComputer(),                   // 所有するコンピューターの
 *          computer => computer.getSoftwareVersion('Node.js'));  // Node.jsのバージョンを調べます。
 * // computerがnullなら、3行目は実行されないでnullが戻ります。
 */
export default function someCall(x, ...fs) {
  return reduce((acc, f) => {
    const nextAcc = f(acc);

    if (nextAcc === null || nextAcc === undefined) {
      return reduced(nextAcc);
    }

    return acc;
  }, x, fs);
}
