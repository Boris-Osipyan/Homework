Homework 6 - task 1
// const myTimeout = (cb, seconds) => {
//   setInterval(() => {
//     cb();
//   }, seconds * 1000);
// };
// myTimeout(() => {
//   console.log(9);
// }, 5);

// Homework 6 - task 2
// Tarberak 2.1
// const squarePromise = (value) => {
//   return new Promise((res, rej) => {
//     if (typeof value === "number") {
//       res(Math.pow(value, 2));
//     } else if (typeof value === "string") {
//       if (+value) k 6 - task 2
// Tarberak 2.1
// const squarePromise = (value) => {
//   return new Promise((res, rej) => {
//     if (typeof value === "number") {
//       res(Math.pow(value, 2));
//     } else if (typeof value === "string") {
//       if (+value) k 6 - task 2
// Tarberak 2.1
// const squarePromise = (value) => {
//   return new Promise((res, rej) => {
//     if (typeof value === "number") {
//       res(Math.pow(value, 2));
//     } else if (typeof value === "string") {
//       if (+value) k 6 - task 2
// Tarberak 2.1
// const squarePromise = (value) => {
//   return new Promise((res, rej) => {
//     if (typeof value === "number") {
//       res(Math.pow(value, 2));
//     } else if (typeof value === "string") {
//       if (+value) k 6 - task 2
// Tarberak 2.1
// const squarePromise = (value) => {
//   return new Promise((res, rej) => {
//     if (typeof value === "number") {
//       res(Math.pow(value, 2));
//     } else if (typeof value === "string") {
//       if (+value) k 6 - task 2
// Tarberak 2.1
// const squarePromise = (value) => {
//   return new Promise((res, rej) => {
//     if (typeof value === "number") {
//       res(Math.pow(value, 2));
//     } else if (typeof value === "string") {
//       if (+value) k 6 - task 2
// Tarberak 2.1
// const squarePromise = (value) => {
//   return new Promise((res, rej) => {
//     if (typeof value === "number") {
//       res(Math.pow(value, 2));
//     } else if (typeof value === "string") {
//       if (+value) {
//         res(Math.pow(+value, 2));
//       }
//     }
//     rej("Cannot convert 'asdf' to a number!");
//   });
// };
// console.log(
//   squarePromise("10")
//     .then((data) => console.log(data))
//     .catch((arg) => console.log(arg))
// );

// Tarberak 2.2
// const squarePromise2 = (value) => {
//   if (typeof value === "number") {
//     return Math.pow(value, 2);
//   } else if (typeof value === "string") {
//     if (+value) {
//       return Math.pow(+value, 2);
//     }
//   }
//   return "Cannot convert 'asdf' to a number!";
// };
// console.log(squarePromise2("9"));

// Homework 6 - task 3
// const months = (number) => {
//   switch (number) {
//     case 1:
//       console.log("January");
//       break;
//     case 2:
//       console.log("February");
//       break;
//     case 3:
//       console.log("March");
//       break;
//     case 4:
//       console.log("April");
//       break;
//     case 5:
//       console.log("May");
//       break;
//     case 6:
//       console.log("June");
//       break;
//     case 7:
//       console.log("July");
//       break;
//     case 8:
//       console.log("August");
//       break;
//     case 9:
//       console.log("September");
//       break;
//     case 10:
//       console.log("October");
//       break;
//     case 11:
//       console.log("November");
//       break;
//     case 12:
//       console.log("December");
//       break;
//   }
// };
// months(3);

// Homework 6 - task 4
// const longestTime = (hours, minutes, seconds) => {
//   let output = seconds;
//   if (output < minutes * 60) {
//     output = minutes;
//   } else if (output < hours * 3600) {
//     output = hours;
//   } else if (output === hours) {
//     return output / 3600;
//   } else if (output === minutes) {
//     return output / 60;
//   }
//   return output;
// };
// console.log(longestTime(15, 955, 59400));

// homework 6 - task 5

// const dateBefore = (year, month, date) => {
//   return new Date(year, month, date - 3);
// };

// console.log(dateBefore(2018, 10, 1));

// const a = 9;
// let time = (a) => {
//   console.time("a");
//   console.log(a);
//   console.timeEnd("a");
// };
// time(a);

// Factorial
// function factorial(x) {
//   if (x === 0) {
//     return 1;
//   }

//   return x * factorial(x - 1);
// }

// console.log(factorial(9));

// const gcd = (a, b) => {
//   console.log(a, " a");
//   console.log(b, " b");
//   if (!b) {
//     return a;
//   }
//   return gcd(b, a % b);
// };

// console.log(gcd(22, 8));

// const squares = (n) => {
//   if (n === 0) {
//     return n;
//   } else if (n === 1) {
//     return n + 0;
//   }
//   return Math.pow(n, 2) + squares(n - 1);
// };
// console.log(squares(5));

// function indexOfArr(arr, el) {
//   if (!arr.length) {
//     return -1;
//   }
//   if (arr[0] === el) {
//     return 0;
//   }
//   console.log(arr);
//   return indexOfArr(arr.slice(1), el) + 1 || -1;
// }
// // console.log(indexOfArr([1, 2, 9, 3, 4, 5], 3));
// console.log(indexOfArr([1, 2, 3, 4], 5));

// Task 4 homework 7
function getTwoLengthChunks(str) {
  let chunks = [];
  for (let i = 0; i < str.length; i += 2) {
    chunks.push(str.substring(i, i + 2));
  }
  return chunks;
}

function generateDescendant(number) {
  return +getTwoLengthChunks(String(number))
    .map((el) => {
      if (el.length === 2) {
        return +el[0] + +el[1];
      }
      // generateDescendant(+el);
      return +el;
    })
    .join("");
}

console.log(generateDescendant(129));

// Test
// const juventus = ["Buffon", "Del Piero", "Baggio"];
// for (const [i, el] of juventus.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// Task 5 homework 7
// let a = { a: 1, b: "jan", hi: "barev" };
// const myClone = (obj) => {
//   let b = {};
//   for (const key in obj) {
//     b[key] = obj[key];
//   }
//   return b;
// };
// console.log(myClone(a));
// console.log(myClone(a) === a);
