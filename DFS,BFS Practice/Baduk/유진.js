// 바둑이승차
// 철수는 그의 바둑이들을 데리고 시장에 가려한다. 그런데 그의 트럭은 c킬로그램을 넘게
// 태울 수가 없다. 넘지않으면서 바둑이들을 많이태우고싶다
// n마리의 바둑이와 각 바둑이의 무게 w가 주어지면
// 철수가 트럭에 태울 수 있는 가장 무거운 무개를 구하는 프로그램을 작성하라

// [입력설명]
// 첫번째 줄에 자연수C와 N이 주어진다.(최대k, 마리)
// 둘째줄부터 N마리 바둑이의 무게가 주어진다.

// [출력]
// 첫번째 줄에 가장 무거운 무게를 출력한다.

// [입력 예시]
// 259 5
// 81
// 58
// 42
// 33
// 61

//출력 예시
// 242

//                      (0, 0)
//                  /             \
//             (1,  81)            (1,  0)
//            /        \           /      \
//       (2, 139)      (2, 81)   (2, 58)  (2, 0)
//      /       \      /     \
//  (3,181)   (3,139) (3,81) (3,214)
//   /    \        /
// (4,214)(4,181)(4, 172)(4, 139)
//     /  \         /  \
// (5, X) (5,214) (5,242) (5,181)

// (0,0)
// (1, 81)(1,0)
// (2, 139)(2, 81), (2, 58)(2, 0)
// (3, 181)(3, 139)(3, 81)(3, 214), ...
// (4, 214)(4, 181)(4, 172)(4, 139) ...
// (5, 275)(5,214),(5, 242)(5, 214)(5, 181)(5, 139)(5, 81)(5, 58)(5, 42)(5, 33)(5, 61)(5, 0)

const func = (C, weights) => {
  let answer = 0;

  const DFS = (idx, sum) => {
    console.log(idx, sum);
    if (sum > C) return false;
    if (idx === weights.length) {
      //idx === 5 모든 바둑이를 고려(재귀 호출 종료시점)
      answer = Math.max(answer, sum); //5번째칸 비교(0, 214)(214, 242)
    } else {
      //현재 바둑이를 선택한경우
      DFS(idx + 1, sum + weights[idx]);
      console.log("---");
      //현재 바둑이를 선택하지않은 경우
      DFS(idx + 1, sum);
    }
  };
  DFS(0, 0);
  return answer;
};

// 입력 예시
const C = 259; //capacity(트럭이 운반할 수 있는 최대 무게)
const weights = [81, 58, 42, 33, 61];
console.log(func(C, weights));
