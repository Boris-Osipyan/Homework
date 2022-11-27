let sum = 0;
const recurs = (arr) => {
  if (arr.length === 0) {
    return sum;
  }
  sum += arr[arr.length - 1];
  arr.pop();
  recurs(arr);
  return sum;
};
console.log(recurs([1, 4, 6, 2, 44, 56, 9]));
