const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
const [A, B, C] = input[0].split(" ").map((e) => Number(e));
console.log(A, B, C);

const solution = (A, B, C) => {
  const 몫 = Math.floor(A / C);
  const 나머지 = A % C;
};

console.log(solution(A, B, C));

// const solution = (a, b, c) => {
//   // 더 이상 나눌 수 없다면
//   if (b === BigInt(1)) return a % c;

//   if (b % BigInt(2) === BigInt(0)) {
//     // b가 짝수인 경우
//     return f(a, b / BigInt(2), c) ** BigInt(2) % c;
//   } else {
//     // b가 홀수인 경우,
//     return (f(a, (b - BigInt(1)) / BigInt(2), c) ** BigInt(2) * a) % c;
//   }
// };

// console.log(solution(A, B, C).toString());
