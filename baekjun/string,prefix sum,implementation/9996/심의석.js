const solution = (input) => {
  let answer = [];
  const pattern = input[0];
  const file = input.slice(1);

  file.forEach((fileName) => {
    if (
      fileName[0] === pattern[0] &&
      fileName[fileName.length - 1] === pattern[2]
    ) {
      answer.push("DA");
    } else {
      answer.push("NE");
    }
  });

  return answer;
};

console.log(solution(["a*d", "abcd", "anestonestod", "facebook"]));
console.log(
  solution([
    "h*n",
    "huhovdjestvarnomozedocisvastan",
    "honijezakon",
    "atila",
    "je",
    "bio",
    "hun",
  ])
);

const fs = require("fs");
const [n, ...input] = fs.readFileSync("a.txt").toString().trim().split("\n");

console.log(input);
