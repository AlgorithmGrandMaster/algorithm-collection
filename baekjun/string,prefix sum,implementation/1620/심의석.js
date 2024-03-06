const fs = require("fs");
const input = fs.readFileSync("a.txt").toString().trim().split("\n");
const poketmonCount = Number(input[0].split(" ")[0]);
const poketmon = input.slice(1, poketmonCount + 1);
const poketmonMap = new Map();
poketmon.forEach((e, i) => poketmonMap.set(e, i + 1));
const questions = input.slice(poketmonCount + 1);

const isNumber = (question) => {
  if (Number(question)) return true;
  return false;
};

const solution = () => {
  questions.forEach((question) => {
    if (isNumber(question)) {
      console.log(poketmon[question - 1]);
    } else {
      console.log(poketmonMap.get(question).toString());
    }
  });
};

solution();
