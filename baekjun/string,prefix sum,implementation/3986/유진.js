//단어 위로 아치형 곡선을 그어 같은 글자끼리(A는 A끼리, B는 B끼리) 쌍을 짓기로 하였다. 
//만약 선끼리 교차하지 않으면서 각 글자를 정확히 한 개의 다른 위치에 있는 같은 글자와 짝 지을수 있다면, 
//그 단어는 '좋은 단어'이다. 좋은단어의 수는?

//ABBA => 좋은단어
//ABAB => x

const path = process.platform === "linux" ? "/dev/stdin" : "input.txt"; // 리눅스로 테스트할 땐 따로 설정해주어야 합니다.
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let [n, ...strings] = input;
n = Number(n);

// 문제 풀이
function solution(n, strings) {
	let answer = 0;
	for (let i = 0; i < n; i++) {
		const stack = [];
		const stringArray = strings[i].split('');
		for (let j = 0; j < stringArray.length; j++) {
			const top = stack[stack.length - 1];
			const current = stringArray[j];
			if (top === current) {
				stack.pop();
			} else {
				stack.push(current);
			}
		}

		answer = stack.length === 0 ? answer + 1 : answer;
	}

	return answer;
}

// 제출
const answer = solution(n, strings);
console.log(answer);