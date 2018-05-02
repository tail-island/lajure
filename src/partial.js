export default function partial(f, ...args) {
  return (...moreArgs) => f(...args, ...moreArgs);
}
