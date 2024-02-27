//한 줄 입력
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString();//.trim()을 넣었더니 출력형식이 잘못되었습니다. 에러났음

const alphabet = 'abcdefghijklmnopqrstuvwxyz';
let obj = {};
alphabet.split('').forEach((e,idx) => {
    obj[e] = idx;
});

const answer = input.split('').map((e)=>{
    if(alphabet.includes(e.toLowerCase())){
        let make = e.toLowerCase();
        let num = parseInt(obj[make])+13 > 25 ? parseInt(obj[make])+13 - 26 : parseInt(obj[make])+13;
        let test = alphabet[num];
        return e === e.toLowerCase(num) ? test : test.toUpperCase();
    }else{//공백일때와 숫자일때
        return e;
    }
    
})
console.log(answer.join(''))
