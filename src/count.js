export default function count(coll) {
  let i = 0;

  for (const _ of coll) {
    i++;
  }

  return i;
}
