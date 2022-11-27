let highElement = arr1[0];
const recurs = (arr) => {
  if (arr.length === 1) {
    return highElement;
  } else if (highElement < arr[arr.length - 1]) {
    highElement = arr[arr.length - 1];
  }
  arr.pop();
  recurs(arr);
  return highElement;
};
console.log(recurs(arr1));
