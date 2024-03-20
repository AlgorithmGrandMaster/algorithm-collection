const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const testCase = +input[0];
let results = [];

let index = 0;
for (let i = 1; i <= testCase; i++) {
  const clothes = new Map();
  const numberClothes = +input[++index];
  for (let j = 1; j <= numberClothes; j++) {
    input[j + index] = input[j + index].split(" ");
    const clothe = input[j + index][0];
    const category = input[j + index][1];

    if (!clothes.has(category)) {
      clothes.set(category, 1);
    } else {
      clothes.set(category, clothes.get(category) + 1);
    }
  }
  index += numberClothes;

  //   console.log(clothes);
  //   Map(2) { 'headgear' => 2, 'eyewear' => 1 }
  //   Map(1) { 'face' => 3 }

  let totalCombinations = 1;
  for (let count of clothes.values()) {
    totalCombinations *= count + 1;
  }

  results.push(totalCombinations - 1);
}

console.log(results.join("\n"));
