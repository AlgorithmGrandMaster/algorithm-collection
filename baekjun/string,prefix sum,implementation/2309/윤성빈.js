const fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => parseInt(i));

// console.log(input);
let totalHeight = 0;
let result = [];

input.sort((a, b) => a - b);

for (i = 0; i < input.length; i++) {
  totalHeight = totalHeight + input[i];
}

let fakeHeight = totalHeight - 100;

let delete_i = 0;
let delete_j = 0;

for (i = 0; i < input.length; i++) {
  for (j = i + 1; j < input.length; j++) {
    if (input[i] + input[j] === fakeHeight) {
      delete_i = input[i];
      delete_j = input[j];
      break;
    }
  }
}

for (i = 0; i < input.length; i++) {
  if (input[i] !== delete_i && input[i] !== delete_j) {
    console.log(input[i]);
  }
}
