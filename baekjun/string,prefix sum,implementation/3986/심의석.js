const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [n, ...strings] = input;
n = Number(n);

function solution(n, strings) {
  let answer = 0;

  // 입력 strings for문 돌리기 [ 'ABAB', 'AABB', 'ABBA' ]
  for (let i = 0; i < n; i++) {
    const stack = [];
    const stringArray = strings[i].split("");

    // [ 'A', 'B', 'A', 'B' ]
    for (let j = 0; j < stringArray.length; j++) {
      // stack의 마지막(제일 윗부분)
      const top = stack[stack.length - 1];
      // 현재 stack에 집어넣을 string
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

console.log(solution(n, strings));
