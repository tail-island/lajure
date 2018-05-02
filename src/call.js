import pipe from './pipe';

export default function call(x, ...fs) {
  return pipe(...fs)(x);
}
