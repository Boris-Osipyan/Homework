function getTwoLengthChunks(number) {
  if (number <= 9) {
    return number;
  }
  let chunks = [];
  for (let i = 0; i < String(number).length; i += 2) {
    chunks.push(String(number).substring(i, i + 2));
  }
  let arr = chunks
    .map((el) => {
      if (el.length === 2) {
        return +el[0] + +el[1];
      }
      return +el;
    })
    .join("");
  let sum = getTwoLengthChunks(arr);
  return sum;
}
console.log(getTwoLengthChunks(873213123123126));
