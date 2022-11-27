const squares = (n) => {
  if (n === 0) {
    return n;
  } else if (n === 1) {
    return n + 0;
  }
  return Math.pow(n, 2) + squares(n - 1);
};
console.log(squares(5));
