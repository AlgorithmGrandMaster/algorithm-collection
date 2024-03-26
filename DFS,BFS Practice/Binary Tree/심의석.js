// 전위순회 출력
const solution1 = (n) => {
  let answer = "";
  const DFS = (v) => {
    if (v > n) return;
    else {
      answer += v;
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  };

  DFS(n);
  return answer;
};

// 중위순회 출력
const solution2 = (n) => {
  let answer = "";
  const DFS = (v) => {
    if (v > n) return;
    else {
      DFS(v * 2);
      answer += v;
      DFS(v * 2 + 1);
    }
  };

  DFS(n);
  return answer;
};

// 후위순회 출력
const solution3 = (n) => {
  let answer = "";
  const DFS = (v) => {
    if (v > n) return;
    else {
      DFS(v * 2);
      DFS(v * 2 + 1);
      answer += v;
    }
  };

  DFS(n);
  return answer;
};

console.log(solution1(7), solution2(7), solution3(7));
