import every from './every';

export default function everyPred(...fs) {
  return (...args) => every(f => f(...args), fs);
}
