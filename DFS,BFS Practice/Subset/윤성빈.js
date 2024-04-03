function solution(N) {
  // 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램
  let answer = [];
  let checkArr = Array.from({ length: N + 1 }, () => 0);
  function DFS(v) {
    if (v === N + 1) {
      let tmp = "";
      for (let i = 1; i <= N; i++) {
        if (checkArr[i] === 1) tmp += i + " ";
      }
      // tmp.length > 0 보다 간결하게 가능
      if (!!tmp.length) console.log(tmp.trim());
      // answer.push(tmp.trim());
    } else {
      checkArr[v] = 1;
      DFS(v + 1);
      checkArr[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1);
}

solution(3);
