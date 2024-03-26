const solution = (n) => {
  let answer = [];
  // 인덱스 번호 n번까지 만들어야하므로 n+1개 원소가 있는 체크배열을 만든다.
  let checkArray = new Array(n + 1).fill(0);

  const DFS = (v) => {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (checkArray[i] === 1) tmp += i;
      }
      if (tmp.length > 0) answer.push(tmp);
    } else {
      // 포함한다 체크
      checkArray[v] = 1;
      DFS(v + 1);

      // 포함안한다 체크
      checkArray[v] = 0;
      DFS(v + 1);
    }
  };

  DFS(1);
  return answer;
};

console.log(solution(3));
