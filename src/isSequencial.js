/**
 * イテレーターを取得できるか（イテラブルか）確認します。
 *
 * @param {*} x - イテレーターを取得できるか確認する対象
 *
 * @return {boolean} イテレーターを取得できるならtrue、そうでなければfalse
 */
export default function isSequencial(x) {
  return x && x[Symbol.iterator];
}
