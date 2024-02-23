const getCharCode = (alphabet) => {
  return alphabet.charCodeAt();
};

const ROT13 = (char) => {
  let charCode = getCharCode(char);

  //A~M
  if (charCode >= 65 && charCode <= 77) {
    return String.fromCharCode(charCode + 13);
  }
  //N~Z
  if (charCode >= 78 && charCode <= 90) {
    return String.fromCharCode(charCode - 13);
  }
  //a~m
  if (charCode >= 97 && charCode <= 109) {
    return String.fromCharCode(charCode + 13);
  }
  //n~z
  if (charCode >= 110 && charCode <= 122) {
    return String.fromCharCode(charCode - 13);
  }
  return char;
};

const solution = (string) => {
  let answer = "";

  for (let char of string) {
    answer += ROT13(char);
  }

  return answer;
};

console.log(solution("Baekjoon Online Judge"));
// Onrxwbba Bayvar Whqtr
console.log(solution("One is 1"));
// Bar vf 1
