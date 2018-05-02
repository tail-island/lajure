export default function memoize(f) {
  const memo = new Map();

  return (...args) => {
    const argsString = args.toString();

    if (!memo.has(argsString)) {
      memo.set(argsString, f(...args));
    }

    return memo.get(argsString);

    // ECMAScriptではArrayの比較ができなくて（実は今日まで知らなかった）、今調べたらtoStringすればよいとWebに書いてあった。
    // というわけでこんなコードなんだけど、これで正しいの？　……正しくない気がする。
  };
}
