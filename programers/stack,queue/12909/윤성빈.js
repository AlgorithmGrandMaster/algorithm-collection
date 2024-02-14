function solution(s) {
  let answer = true;
  let prev = s[0];
  let arr = [s[0]];

  for (i = 1; i < s.length; i++) {
    if (prev === ")") {
      if (s[i] === "(") {
        prev = "(";
        arr.push(s[i]);
      } else {
        prev = ")";
        arr.push(s[i]);
      }
    } else if (prev === "(") {
      if (s[i] === "(") {
        prev = "(";
        arr.push(s[i]);
      } else {
        prev = 0;
        arr.pop();
      }
    } else {
      if (arr.length > 0) {
        if (arr[arr.length - 1] === "(") {
          if (s[i] === ")") {
            prev = 0;
            arr.pop();
          } else {
            prev = arr[arr.length - 1];
            arr.push(s[i]);
          }
        } else {
          prev = arr[arr.length - 1];
          arr.push(s[i]);
        }
      } else {
        prev = s[i];
        arr.push(s[i]);
      }
    }
  }

  arr.length > 0 ? (answer = false) : (answer = true);

  return answer;
}
