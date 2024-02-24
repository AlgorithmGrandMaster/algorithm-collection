const fs = require("fs").readFileSync("input.txt", "utf8");
let input = fs.trim().split("\n");

let playerName = input.slice(1);
let array = new Map();
let answer = "PREDAJA";

// 97 ~ 122

for (i = 97; i < 123; i++) {
  let count = 0;
  for (j = 0; j < playerName.length; j++) {
    if (playerName[j][0].codePointAt() === i) {
      count = count + 1;
    }
  }
  if (count !== 0) array.set(i, count);
}

array.forEach((value, key) => {
  if (value >= 5) {
    if (answer === "PREDAJA") {
      answer = String.fromCharCode(key);
    } else {
      answer = answer + String.fromCharCode(key);
    }
  }
});

console.log(answer);
