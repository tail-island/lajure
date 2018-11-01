/**
 * 引数がnullだった場合に、指定されたデフォルト値に置き換えて実行する関数を生成します。
 *
 * @param {function} f - 実行する関数
 * @param {*[]} defaultArgs - 引数のデフォルト値
 *
 * @return {function} 引数がnullの場合に指定されたデフォル値を設定してfを実行する関数
 */
export default function fnil(f, ...defaultArgs) {
  return function(...args) {
    for (let i = 0; i < args.length; ++i) {
      if (args[i] === null) {
        args[i] = defaultArgs[i];
      }
    }

    return f(...args);
  };
}
