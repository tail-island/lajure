import seq from './seq';

export default function isEmpty(coll) {
  if (!seq(coll)) {
    return true;
  }

  return false;
}
