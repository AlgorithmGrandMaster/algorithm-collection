const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const ingredientNum = parseInt(input[0]);
const requirements = parseInt(input[1]);
const ingredientArr = input[2].split(" ");

ingredientArr.sort((a, b) => a - b);

let count = 0;
for (let i = 0; i < ingredientArr.length; i++) {
  for (let j = i + 1; j < ingredientArr.length; j++) {
    let sum = parseInt(ingredientArr[i]) + parseInt(ingredientArr[j]);

    if (sum === requirements) {
      count += 1;
    } else if (sum > requirements) {
      break;
    }
  }
}

console.log(count);
