const solution = (string) => {
  let answer = 1;
  const maxIndex =
    string.length % 2 === 0 ? string.length / 2 : Math.ceil(string.length / 2);

  for (let i = 0; i < maxIndex; i++) {
    if (string[i] !== string[string.length - 1 - i]) answer = 0;
    else continue;
  }

  return answer;
};

console.log(solution("level"));
// 1
console.log(solution("baekjoon"));
// 0
