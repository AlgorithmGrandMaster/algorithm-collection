const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

// [
//   [10, 2],
//   [3, -2, -4, -9, 0, 3, 7, 13, 8, -3],
// ];

// console.log(input);

let days = input[0][0];
let sum_day = input[0][1];
let dayArr = input[1];
let maxSum = 0;

dayArr.forEach((d, i) => {
  let sum = d;

  if (i === days - sum_day) {
    return;
  } else {
    for (let k = i + 1; k < i + sum_day; k++) {
      sum = sum + dayArr[k];
    }
  }

  if (maxSum < sum) maxSum = sum;
});

console.log(maxSum);

// for 중첩으로 쓰면 시간초과 에러남
// for문은 동기 방식이고 forEach문은 비동기 방식

// for (let i = 0; i < days - 1; i++) {
//   let sum = 0;
//   if (i <= days - sum_day) {
//     for (let j = i; j < j + sum_day; j++) {
//       sum = sum + day_arr[j];
//     }
//   }

//   if (maxSum < sum) maxSum = sum;
// }

// console.log(maxSum);
