const fs = require("fs");
const input = fs.readFileSync("a.txt").toString();

const canChanged = (name) => {
  // 알파벳 갯수 Map 만들기
  let felindromMap = new Map();
  for (let char of name) {
    if (felindromMap.has(char))
      felindromMap.set(char, felindromMap.get(char) + 1);
    else felindromMap.set(char, 1);
  }

  // 알파벳 갯수가 홀수인 경우가 2번이상일때는 펠린드롬 불가능
  let tmp = [];
  for (let [key, val] of felindromMap) {
    if (val % 2 === 1) tmp.push(val);
    if (tmp.length > 1) return [false, felindromMap];
  }

  return [true, felindromMap];
};

const solution = (name) => {
  let answer = `I'm Sorry Hansoo`;
  const [isFelindrom, felindromMap] = canChanged(name);

  if (isFelindrom) {
    let middleChar = "";
    for (let [key, val] of felindromMap) {
      if (val % 2 === 0) felindromMap.set(key, val / 2);
      else {
        felindromMap.set(key, Math.floor(val / 2));
        middleChar = key;
      }
    }

    let front = "";
    let back = "";
    for (let [key, val] of felindromMap) {
      for (let i = 1; i <= val; i++) {
        front += key;
      }
      front = front.split("").sort().join("");
    }

    back = front.split("").reverse().join("");
    if (middleChar) {
      answer = front + middleChar + back;
    } else {
      answer = front + back;
    }
  }

  console.log(answer);
};

solution(input);
