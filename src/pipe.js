import reduce from './reduce';

export default function pipe(...fs) {
  return (x) => reduce((acc, f) => f(acc), x, fs);
}
