import some from './some';

export default function someFn(...fs) {
  return (...args) => some(f => f(...args), fs);
}
