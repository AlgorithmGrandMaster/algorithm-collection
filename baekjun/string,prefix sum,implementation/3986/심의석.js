const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [n, ...strings] = input;
n = Number(n);

// 문제 풀이
function solution(n, strings) {
  let answer = 0;
  for (let i = 0; i < n; i += 1) {
    const stack = [];
    const stringArray = strings[i].split("");
    for (let j = 0; j < stringArray.length; j += 1) {
      const top = stack[stack.length - 1];
      const current = stringArray[j];
      if (top === current) {
        stack.pop();
      } else {
        stack.push(current);
      }
    }

    answer = stack.length ? answer : answer + 1;
  }

  return answer;
}

// 제출
const answer = solution(n, strings);
console.log(answer);
