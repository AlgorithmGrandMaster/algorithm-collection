const solution = (K, input) => {
  let lt, rt;
  let tmp = input.slice(0, K);
  let sum = tmp.reduce((acc, cur) => acc + cur);
  let answer = sum;

  for (let i = 1; i <= input.length - K; i++) {
    lt = i;
    rt = i + K - 1;
    sum += input[rt] - input[lt - 1];

    answer = Math.max(sum, answer);
  }

  return answer;
};

const fs = require("fs");
const [n, input] = fs.readFileSync("a.txt").toString().trim().split("\n");
const inputArr = input
  .trim()
  .split(" ")
  .map((e) => Number(e));
const K = Number(n.trim().split(" ")[1]);

console.log(solution(K, inputArr));
