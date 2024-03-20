const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

// 팰린드롬의 조건은 문자열 중 홀수인 문자의 개수가 하나 or 모든 문자가 각각 짝수개

let count = [];

for (let i = 0; i < input.length; i++) {
  const word = input.charCodeAt(i) - 65;

  if (count[word]) {
    count[word]++;
  } else {
    count[word] = 1;
  }
}

const odd = count.filter((v) => v % 2 !== 0);
if (odd.length > 1) {
  console.log("I'm Sorry Hansoo");
} else {
  let head = "";
  let body = "";
  let tail = "";

  //   [4, 2, 1]
  count.forEach((v, i) => {
    if (v % 2 !== 0) {
      body += String.fromCharCode(i + 65);
      v--;
    }
    for (let k = 0; k < v / 2; k++) {
      head += String.fromCharCode(i + 65);
      tail = String.fromCharCode(i + 65) + tail;
    }
  });

  console.log(head + body + tail);
}
