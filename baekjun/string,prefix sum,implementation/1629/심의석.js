const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const [A, B, C] = input[0].split(" ").map(BigInt);

const solution = (a, b, c) => {
  // 더 이상 나눌 수 없다면
  if (b === BigInt(1)) return a % c;

  if (b % BigInt(2) === BigInt(0)) {
    // b가 짝수인 경우
    return f(a, b / BigInt(2), c) ** BigInt(2) % c;
  } else {
    // b가 홀수인 경우,
    return (f(a, (b - BigInt(1)) / BigInt(2), c) ** BigInt(2) * a) % c;
  }
};

const answer = solution(A, B, C).toString();

console.log(answer);
