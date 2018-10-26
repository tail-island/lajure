import filter from './filter';

export default function randomSample(prob, coll) {
  return filter(_ => Math.random() <= prob, coll);
}
