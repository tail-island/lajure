# lajure

ECMAScriptの`iterator`を活用した、Clojureの標準ライブラリ風の関数型プログラミング・ライブラリです。

## Usage

lajureは、Node.jsバージョン8.0以降をサポートしています。皆様のパッケージに、以下のコマンドでインストールしてください。

~~~shell
$ npm install lajure
$ npm install -D babel-plugin-lajure
~~~

また、lajureはbabelによるトランスパイルを前提としています。以下のコマンドで、babelをインストールしておいてください。

~~~shell
$ npm install -D babel-cli babel-preset-env babel-register
~~~

その上で、babelとlajureのbabelプラグインを呼び出すように、package.jsonを編集してください。

~~~json
{
  "name": "...",
  "version": "...",
  "description": "...",
  "author": "...",
  "license": "...",
  "private": true,
  "babel": {
    "presets": [
      [
        "env",
        {
          "targets": {
            "node": 8
          }
        }
      ]
    ],
    "plugins": [
      "babel-plugin-lajure"
    ]
  },
  "scripts": {
    "start": "node -r babel-register src/app.js"
  },
  "devDependencies": {
    "babel-cli": "...",
    "babel-plugin-lajure": "...",
    "babel-preset-env": "...",
    "babel-register": "..."
  },
  "dependencies": {
    "lajure": "..."
  }
}
~~~

package.jsonに追加しなければならないのは、`"babel"`の部分と`"scripts"`の中の`"start"`の部分です（`"start"`の内容は、皆様のプロジェクトに合わせて適宜変更してください）。

これで、`src/app.js`にコードを書けば、`npm start`で実行できます。

## Why iterator and lajure?

どうして`iterator`とlajureを使用するのか、`iterator`とlajureを使用するとどのような良いことがあるのかを、具体的に見ていきましょう。題材は、[Project Euler](https://projecteuler.net/)です。

### 問題1「3か5の倍数」

Project Eulerの問題1は、「10未満の自然数で、3か5の倍数は3と5、6、9。その合計は23。では、1,000未満の場合は？」です。いきなり全部は難しいので、順を追って実装していきましょう。まずは、「自然数」をやります。

自然数は、1, 2, 3...と無限に続く集合です。無限の大きさなので、もちろん`Array`では表現できません。だから、別のやり方で表現します。こんな感じ。

~~~javascript
function* getNaturalNumbers() {
  let i = 1;

  for (;;) {
    yield i;

    i++;
  }
}
~~~

`function`の後ろに`*`がついていますので、`getNaturalNumbers`は普通の関数ではなくて、ジェネレーターです。ジェネレーターは`iterator`を返し、`iterator`の`next`メソッドが呼ばれるたびに`yield`までの処理をを実行して制御を呼び出し側に戻します。上のコードには無限を表現するための無限ループがありますけど、`yield`するたびに呼び出し側に制御が戻るのだから何も問題はありません。

試してみましょう。

~~~javascript
const naturalNumbers = getNatualNumbaers();

console.log(naturalNumbers.next().value);  // 1
console.log(naturalNumbers.next().value);  // 2
console.log(naturalNumbers.next().value);  // 3
~~~

ほら、プログラムがきちんと止まります。ただ、`iterator`を裸で使うのは少し面倒ですから、lajureが提供する関数を使用しましょう。条件を満たす場合だけ`iterator`を`next`する、`takeWhile`関数を使います。

~~~javascript
import {takeWhile} from 'lajure';

const targetNaturalNumbers = takeWhile(x => x < 10, naturalNumbers);

for (const x of targetNaturalNumbers) {  // `for...of`（`in`ではないことに注意）は、`iterator`の要素を使用してループします。
  console.log(x);  // 1, 2, 3...9
}
~~~

上のコードの`x < 10`を`x < 1000`にすれば要求である「1000未満の自然数」を表現できる……のですけど、少しだけ戻って`getNaturalNumbers()`を修正しておきましょう。今のままだと長すぎて、そして順に処理を追っていかないと理解できなくて、つまりは保守性が低すぎるためです。ある値に処理を繰り返した値の集合を返す`iterate`関数を使用しましょう。

~~~javascript
import {inc, iterate} from 'lajure';  // incは引数に1を足す関数です。

function getNaturalNumbers() {
  return iterate(inc, 1);
}
~~~

`iterate(f, x)`というコードは、`x, f(x), f(f(x)), f(f(f(x)))...`を表現する`iterator`を返します。`iterate`を知っていれば、この短いコードで、1から始まる1づつ増えていく数値の集合だということがすぐに分かって便利で保守性が高くて素敵。

これでコードがきれいになりましたから、続きをやりましょう。「3か5の倍数」の部分です。この部分は、集合の中から指定した条件を満たす要素を抜き出す`filter`関数を使用すれば実装できます。こんな感じ。

~~~javascript
import {filter} from 'lajure';

const multiples = filter(x => x % 3 === 0 || x % 5 === 0, targetNaturalNumbers);
~~~

「3で割った余りが0、または、5で割った余りが0」なら、その数値は3か5の倍数ですよね？

最後、「合計」の部分です。これは、要素を畳み込む`reduce`関数を使用します。

~~~javascript
import {reduce} from 'lajure';

const anser = reduce((acc, x) => acc + x, multiples);
~~~

`reduce(f, [1, 2, 3, 4, 5])`は、`f(f(f(f(1, 2), 3), 4), 5)`を実行して、集合ではなく値を返します。一つ前の要素の処理結果が`acc`として渡ってくるというわけ。

というわけで、これで完成かな？　ここまでをまとめてみましょう。一時変数は状態をもたらして副作用を引き起こす危険性があるので削除します。その結果は、こんな感じ。

~~~javascript
import {filter, inc, iterate, reduce, takeWhile} from 'lajure';

function getNaturalNumbers() {
  return iterate(inc, 1);
}

const answer = reduce((acc, x) => acc + x,
                      filter(x => x % 3 === 0 || x % 5 === 0,
                             takeWhile(x => x < 1000,
                                       getNaturalNumbers())));
~~~

あらら、なんだかキョーレツに分かりづらい……。処理の順序と記述順序が逆な上に、無駄にインデントしちゃっています。これでは保守性が低すぎますから、lajureが提供する`tCall`マクロで分かりやすく書き直しましょう。

~~~javascript
const answer1 = tCall(getNaturalNumbers(),
                      takeWhile(x => x < 1000),
                      filter(x => x % 3 === 0 || x % 5 === 0),
                      reduce((acc, x) => acc + x)));
~~~

`tCall`マクロは、関数の実行結果を、次の関数の最後の引数に設定するコードを生成します。`tCall(x, foo(1), bar(2))`なら、`bar(2, foo(1, x))`に相当するコードが生成されるというわけ。

というわけで、これがProject Eulerの問題1を解くプログラムの完成形です。

~~~javascript
import {filter, inc, iterate, reduce, takeWhile} from 'lajure';

function getNaturalNumbers() {
  return iterate(inc, 1);
}

const answer1 = tCall(getNaturalNumbers(),                      // 自然数で
                      takeWhile(x => x < 1000),                 // 1000未満で
                      filter(x => x % 3 === 0 || x % 5 === 0),  // 3と5の倍数の数を
                      reduce((acc, x) => acc + x));             // 合計する
~~~

問題文がそのままコードになっていますね。`iterator`とlajureは便利な感じがしてきませんか？

## 問題2「偶数のフィボナッチ数列」

本当に便利なのかを確認するために、Project Eulerの問題2の、「4百万未満のフィボナッチ数列の偶数だけを合計したらいくつになるか？」をやりましょう。フィボナッチ数列というのは、1, 2, 3, 5, 8, 13, 21, 34, 55, 89...みたいに、前の2つ要素を足し合わせた値が次に続く数列です。1 + 2 = 3、2 + 3 = 5、3 + 5 = 8と続いているでしょ？

このフィボナッチ数列を`iterator`とlajureで実装したのが、以下のコードです。

~~~javascript
import {cons} from 'lajure';

functon getFibonacciNumbers(x, y) {
  return cons(x, lazySeq(getFibonacciNumbers(y, x + y)));
}
~~~

`cons`は`iterator`を作る関数です。`cons(１つめの要素、残りの要素)`と使用します。残りの要素を作るには再帰呼出ししなければならないのですけど、普通に再帰呼び出しすると無限に呼び出されてスタック・オーバーフローしてしまいますから、`lazySeq`マクロを入れて`next()`されるまでは再帰呼び出しが実行されないようなコードを生成します。

このコードはlajureを作るときに参考にしたClojureでは頻出するイディオムなのですけど、Clojureに馴染みがないと分かりづらいかもしれませんね……。そんな場合向けに素のJavaScriptで書いたバージョンもあげておきましょう。

~~~javascript
function* getFibonacciNumbers(x, y) {
  yield  x;
  yield* getFibonacciNumbers(y, x + y);
}
~~~

`yield*`は、集合の残りを別の`iterator`に委任する命令です。とりあえず1つ返して、残りは再帰呼出しした先に任せて、で、再帰呼出しした先でも同様に順送りするから、無限に続くフィボナッチ数列を表現できるというわけ。ともあれ、これでフィボナッチ数列はできましたから、あとは問題を解くだけです。問題1と同じやり方でいけます。

~~~javascript
import {cons, filter, reduce, takeWhile} from 'lajure';

function getFibonacciNumbers(x, y) {
  return cons(x, lazySeq(getFibonacciNumbers(y, x + y)));
}

const answer2 = tCall(getFibonacciNumbers(1, 2),     // フィボナッチ数列で
                      takeWhile(x => x < 4000000),   // 4百万未満で
                      filter(x => x % 2 === 0),      // 偶数の数を
                      reduce((acc, x) => acc + x));  // 合計する
~~~

はい、完了。とてもかんたんですね。ここまでかんたんにプログラミングできた理由は、関数型プログラミングをしているためです。関数型プログラミングでは、どのようにやるのかではなく、定義そのものを書いていきます。普通のコンピューターで実行する以上、どこかで`for`文や`if`などの、コンピューターが実行可能な範囲でどのようにやるかを書かなければならないのですけど、それらの処理はパターン化できます。このパターンをライブラリ化してしまえば、ほら、上のコードのように定義だけを書くかんたんプログラミングができるのです。

でも、裏を返せばパターンの知識がないとコードを書けないわけで、もしそのパターンを覚えるのが大変だったら全然かんたんじゃあないことにもなりますけど、どうかご安心ください。lajureはClojureのライブラリを参考にして作っていて、そのClojureはとても優れたライブラリを持っています。どれくらい優れているかというと、[Clojure - Cheatsheet](https://clojure.org/api/cheatsheet)にあるとても少数の関数だけで大抵のプログラムを組めちゃうくらいにコンパクトで表現力が高いんです。覚えなければならないパターンはとても少ないのですから、やはりとってもかんたんです。

## 問題3「最大の素因数」

`iterator`についてもやりましょう。無限の集合を扱える`iterator`の便利さを知るために、もう1問やります。問題3の「600851475143の最大の素因数は？」です。

さて、素因数分解をするには、まずは素数の集合が欲しい。素数ってのは、「1より大きく、1と自分自身でしか割り切れない数」です。単純に実装してみると、以下になるでしょうか？

~~~javascript
import {every, filter, inc, iterate, takeWhile} from 'lajure';

function getPrimeNumbers() {
  return tCall(iterate(inc, 2),
               filter(x => tCall(iterate(inc, 2),
                                 takeWhile(y => y < x),
                                 every(y => x % y !== 0))));
}
~~~

`every`関数は、集合のすべての要素が条件を満たすかを調べます。2以上の整数すべてで割った余りが0ではないなら、それは素数ですよね？

でも、このコードはもう少し効率化できます。まず、2以外の偶数は2で割り切れるので素数じゃありません。だから、奇数だけを調べればよい。あと、2以上の数ではなくて、「平方根以下」の「素数」で割り切れない場合は、素数なんだそうです。でも、「平方根以下」はともかくとして、「素数」の集合を取得する関数の中で「素数」の集合を使用してもよいのでしょうか？

結論から言えば、大丈夫です。必要な素数は対象の平方根以下で、たとえば25が素数かどうかを調べるときには25の平方根である5以下の素数までしか必要ありません。問題になるのは最初の1つですけど、これは2に決まっているので決め打ちで2を返してしまえばよい。というわけで、コードは以下になります。コード中の`dropWhile`は、`takeWhile`の逆です。

~~~javascript
import {dropWhile, every, filter, iterate, takeWhile} from 'lajure';

function getOddNumbers() {
  return iterate(x => x + 2, 1);  // 奇数
}

function getPrimeNumbers() {
  return cons(2,                                                    // 2と、
              tCall(getOddNumbers(),                                // 奇数で
                    dropWhile(x => x < 3),                          // 3未満ではなくて、
                    filter(x => tCall(getPrimeNumbers(),            // 素数の
                                      takeWhile(p => p ** 2 <= x),  // 平方根以下で
                                      every(p => x % p !== 0)))));  // 割り切れない数
}
~~~

試してみましょう。

~~~javascript
console.log(Array.from(drop(990, take(1000, getPrimeNumbers()))));
~~~

991番目から1000番目の素数は、7841, 7853, 7867, 7873, 7877, 7879, 7883, 7901, 7907, 7919みたいですね。

ここまでできれば、素因数分解は割り切れる素数を探していくだけなので、とてもかんたん。以下のようなコードになります。

~~~javascript
function getPrimeFactors(n) {
  if (n === 1) {  // 1は素因数分解できないので、
    return null;  // 空集合。
  }

  const p = (tCall(getPrimeNumbers(),                     // 素数の
                   takeWhile(p => p ** 2 <= n),           // 平方根以下で
                   some(p => n % p === 0 ? p : null)) ||  // 割り切れた数。または、
             n);                                          // 素数であるnそのもの

  return cons(p, lazySeq(getPrimeFactors(n / p)));
}
~~~

lajureでは`null`を空集合として扱うので、素因数分解が完了したら（`n === 1`になったら）、`null`を返します。今回は素数を探す場合とは違って「割り切れる数があったら」なので、`every`ではなく`some`を使用します。`every`はすべて真かを聞かれているので真か偽で答えるしかないですけど、`some`の場合は一つでも真があったら「こいつが真だったから真」と答えます。だから`p => n % p === 0 ? p : null`としておけば、最初に割り切れた素数そのものを取得できるというわけ。あと、最後まで真が見つからない場合は偽の値であるnullが返りますので、`||`で続けて`n`そのものを返します。あとはいつもの`cons`と`lazySeq`で終わり。

というわけで、問題3を解答するコードは以下の通り。

~~~javascript
import {cons, dropWhile, every, filter, iterate, last, some, takeWhile} from 'lajure';

function getOddNumbers() {
  return iterate(x => x + 2, 1);  // 奇数
}

function getPrimeNumbers() {
  return cons(2,                                                    // 2と、
              tCall(getOddNumbers(),                                // 奇数で
                    dropWhile(x => x < 3),                          // 3未満ではなくて、
                    filter(x => tCall(getPrimeNumbers(),            // 素数の
                                      takeWhile(p => p ** 2 <= x),  // 平方根以下で
                                      every(p => x % p !== 0)))));  // 割り切れない数
}

function getPrimeFactors(n) {
  if (n === 1) {  // 1は素因数分解できないので、
    return null;  // 空集合。
  }

  const p = (tCall(getPrimeNumbers(),                     // 素数の
                   takeWhile(p => p ** 2 <= n),           // 平方根以下で
                   some(p => n % p === 0 ? p : null)) ||  // 割り切れた数。または、
             n);                                          // 素数であるnそのもの

  return cons(p, lazySeq(getPrimeFactors(n / p)));
}

const answer3 = last(getPrimeFactors(600851475143));  // lastは最後の要素を返す関数です。
~~~

ほら、`iterator`便利でしょ？　ぜひ使いましょう。今すぐ使いましょう。その際に、もしよろしければ、lajureも。


# For Clojurian

Clojure使いの皆様は、以下にご注意ください。

## tee

Clojureはコンス・セルに基づくリストを使用していて、JavaScriptの`iterator`は反復処理です。よって、Clojureとはいろいろと使い方が異なります。一番の違いは、`iterator`は消費するとなくなってしまうことです。

~~~javascript
const xs = take(5, iterate(inc, 1));

const array1 = Array.from(xs);  // [1, 2, 3, 4, 5]
const array2 = Array.from(xs);  // []。xsは上の行で消費されたので、空集合になります。
~~~

この影響で、先程の素数を取得する関数では、それまでの処理で見つけた素数群を利用するのではなく、再度処理を実行して素数を見つけています。それまでの処理で見つけた素数群を利用しちゃうと、せっかく見つけた素数がなくなっちゃいますからね（だから、ごめんなさい。実は先程のコードはそんなに速くないです）。

JavaScriptと同様の`iterator`を使用する言語としてはPythonがあって、Pythonでは`iterator`を複数回使用する場合向けに`tee`という関数を用意しています。lajureにも`tee`関数がありますので、必要に応じて使ってみてください。

~~~javascript
import {inc, iterate, take, tee} from 'lajure';

const [xs1, xs2] = tee(2, take(5, iterate(inc, 1)));

const array1 = Array.from(xs1);  // [1, 2, 3, 4, 5]
const array2 = Array.from(xs2);  // [1, 2, 3, 4, 5]
~~~

## juxt

コンス・セルと`iterator`問題は、`juxt`に大きく影響します。`juxt(foo, bar)(iter)`とした場合、`foo(iter)`を実行した段階で`iterator`が消費されるので、続く`bar(iter)`が予想外の動作をしてしまいます。そこで、lajureの`juxt`では、`juxt`で生成した関数の引数が`iterator`一つだけだった場合は、`tee`するようにしました。

~~~javascript
import {first, juxt, range, rest} from 'lajure';

const [item, iter] = juxt(first, rest)(range(5));

console.log(item);               // 0
console.log(Array.from(iter));   // [ 1, 2, 3, 4 ]
~~~

## lazySeq

Clojureの`lazy-seq`は複数の文を受け取れますが、lajureの`lazySeq`マクロは関数呼び出し一つしか受け取れません。babelはECMAScriptの文法に含まれるコードしかパースできないためです。

この制限は、匿名関数を使用し、`lazySeq`マクロの代わりに`lazySeqFn`関数を使用すれば回避できます（実は、`lazySeq`マクロは引数を匿名関数でくるんで、`lazySeqFn`関数を呼び出しているだけなんです）。

~~~javascript
import {cons, lazySeqFn} from 'lajure';

cons(x, lazySeqFn(() => {
  ...
  ...
  ...

  return ...
}));
~~~
