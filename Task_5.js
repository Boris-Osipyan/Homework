let a = { a: 1, b: "jan" };
const myClone = (obj) => {
  let b = {};
  for (const key in obj) {
    b[key] = obj[key];
  }
  return b;
};
console.log(myClone(a) === a);
