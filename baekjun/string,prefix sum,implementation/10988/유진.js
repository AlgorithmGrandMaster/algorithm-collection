let fs = require('fs');
const str = require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = 0
let arr = str.split('');
if(str === arr.reverse().join('')){
    answer = 1
}
console.log(answer)
