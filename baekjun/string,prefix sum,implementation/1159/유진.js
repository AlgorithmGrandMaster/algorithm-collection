//여러 줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let count = input[0];
let obj = {}

for (let i = 1; i < input.length; i++) {
   //첫글자가 obj에 있는지 찾기
    const findFirstKey = Object.keys(obj).find(e => e.substr(0,1) === input[i].substr(0,1))
    if(!findFirstKey){
        obj[input[i].substr(0,1)] = 1
    }else{
        obj[input[i].substr(0,1)] += 1
    }
    //없으면 obj추가 + 1
    //있으면 + 1
}
//obj의 value가 5개인것이 있는가?
//key를 사전순으로 공백없이 출력
const filtered = Object.keys(obj).filter(e => obj[e] >= 5)

console.log(filtered.length > 0 ? filtered.sort().join('') : "PREDAJA")
