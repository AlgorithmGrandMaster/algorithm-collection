const fs = require("fs").readFileSync("input.txt", "utf8");
let input = fs;

let answer = "";

// console.log(input);

for (i = 0; i < input.length; i++) {
  let asciiNum = input[i].charCodeAt() + 13;

  if (
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(input[i]) ||
    input[i] === " "
  ) {
    answer = answer + input[i];
  } else if (input[i] === input[i].toUpperCase()) {
    // 65 ~ 90
    if (asciiNum > 90) {
      asciiNum = asciiNum - 90 + 65 - 1;
    }
    answer = answer + String.fromCharCode(asciiNum);
  } else if (input[i] === input[i].toLowerCase()) {
    // 97 ~ 122
    if (asciiNum > 122) {
      asciiNum = asciiNum - 122 + 97 - 1;
    }
    answer = answer + String.fromCharCode(asciiNum);
  }
}

console.log(answer);
