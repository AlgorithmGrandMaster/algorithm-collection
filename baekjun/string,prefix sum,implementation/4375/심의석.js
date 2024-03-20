const answers = [];

// const n = 3
// cosnt n = 7
const n = 9901;
// (...1*10*10+1*10+1)%n 에 대한 나머지가 계속 들어감 즉 나누고 남은애에 10배에 1개 더하고 또 나누고 나머지
let num = 1;
// 자릿수
let length = 1;

while (true) {
  if (num % n === 0) {
    answers.push(length);
    break;
  } else {
    console.log(num);
    num = (num * 10 + 1) % n;
    length += 1;
  }
}

console.log(answers.join("\n"));
