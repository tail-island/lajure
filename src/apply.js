export default function apply(f, ...args) {
  return (moreArgs) => {
    return f(...args, ...moreArgs);
  };
}
