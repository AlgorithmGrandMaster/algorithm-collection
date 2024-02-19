const fs = require("fs");
let input = fs.readFileSync("input.txt").toString();

let result = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
// let arr = new Array(26).fill(0);

for (i = 0; i < input.length; i++) {
  if (input[i] === "a") {
    result[0] = result[0] + 1;
  } else if (input[i] === "b") {
    result[1] = result[1] + 1;
  } else if (input[i] === "c") {
    result[2] = result[2] + 1;
  } else if (input[i] === "d") {
    result[3] = result[3] + 1;
  } else if (input[i] === "e") {
    result[4] = result[4] + 1;
  } else if (input[i] === "f") {
    result[5] = result[5] + 1;
  } else if (input[i] === "g") {
    result[6] = result[6] + 1;
  } else if (input[i] === "h") {
    result[7] = result[7] + 1;
  } else if (input[i] === "i") {
    result[8] = result[8] + 1;
  } else if (input[i] === "j") {
    result[9] = result[9] + 1;
  } else if (input[i] === "k") {
    result[10] = result[10] + 1;
  } else if (input[i] === "l") {
    result[11] = result[11] + 1;
  } else if (input[i] === "m") {
    result[12] = result[12] + 1;
  } else if (input[i] === "n") {
    result[13] = result[13] + 1;
  } else if (input[i] === "o") {
    result[14] = result[14] + 1;
  } else if (input[i] === "p") {
    result[15] = result[15] + 1;
  } else if (input[i] === "q") {
    result[16] = result[16] + 1;
  } else if (input[i] === "r") {
    result[17] = result[17] + 1;
  } else if (input[i] === "s") {
    result[18] = result[18] + 1;
  } else if (input[i] === "t") {
    result[19] = result[19] + 1;
  } else if (input[i] === "u") {
    result[20] = result[20] + 1;
  } else if (input[i] === "v") {
    result[21] = result[21] + 1;
  } else if (input[i] === "w") {
    result[22] = result[22] + 1;
  } else if (input[i] === "x") {
    result[23] = result[23] + 1;
  } else if (input[i] === "y") {
    result[24] = result[24] + 1;
  } else if (input[i] === "z") {
    result[25] = result[25] + 1;
  }
}

console.log(result.join(" "));
