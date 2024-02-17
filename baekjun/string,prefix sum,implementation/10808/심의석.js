const solution = (string) => {
  const alphbet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let sH = new Map();
  alphbet.forEach((e) => sH.set(e, 0));

  for (let char of string) {
    sH.set(char, sH.get(char) + 1);
  }

  let answer = [];
  for (let [key, val] of sH) {
    answer.push(val);
  }
  return answer;
};

console.log(solution("baekjoon"));
// [1, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
