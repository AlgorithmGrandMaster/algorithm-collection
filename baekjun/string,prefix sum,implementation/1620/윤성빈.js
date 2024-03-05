const filePath = process.platform === "linux" ? "dev/stdin" : "./input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const N = +input[0].split(" ")[0]; //+는 문자 -> 숫자 해주는거
const M = +input[0].split(" ")[1];

// let pokemonArr = [];

// for (let i = 0; i < N; i++) {
//   pokemonArr.push(input[i + 1]);
// }

const pokemonMap = new Map();

const pokemonArr = input.slice(1, N + 1);
const question = input.slice(N + 1);

// for (let i = 0; i < M; i++) {
//   if (isNaN(question[i])) {
//     // 문자
//     console.log(pokemonArr.indexOf(question[i]) + 1);
//   } else {
//     // 숫자
//     console.log(pokemonArr[+question[i] - 1]);
//   }
// }

pokemonArr.forEach((p, i) => {
  pokemonMap.set(p, +i + 1);
});

question.forEach((q) => {
  if (isNaN(+q)) console.log(pokemonMap.get(q));
  else console.log(pokemonArr[+q - 1]);
});

// array.indexOf 사용하면 시간초과
