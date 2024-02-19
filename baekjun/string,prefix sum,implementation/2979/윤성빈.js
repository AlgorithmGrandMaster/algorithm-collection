const fs = require("fs");
let input = fs
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

//[ [ 5, 3, 1 ], [ 1, 6 ], [ 3, 5 ], [ 2, 8 ] ]
let result = 0;

let A = input[0][0];
let B = input[0][1];
let C = input[0][2];

let A_truck = new Array(100).fill(0);
let B_truck = new Array(100).fill(0);
let C_truck = new Array(100).fill(0);

A_truck.fill(1, input[1][0], input[1][1]);
B_truck.fill(1, input[2][0], input[2][1]);
C_truck.fill(1, input[3][0], input[3][1]);

for (i = 0; i < 100; i++) {
  let count = [A_truck[i], B_truck[i], C_truck[i]].reduce(
    (cnt, element) => cnt + (1 === element)
  );

  if (count === 1) {
    result = result + A;
  } else if (count === 2) {
    result = result + 2 * B;
  } else if (count === 3) {
    result = result + 3 * C;
  }
}

console.log(result);
