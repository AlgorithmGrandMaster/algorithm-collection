//수열

//주어지는값(예시)
const arr = [3,-2,-4,-9,0,3,7,14,8,-3]
const count = 2

//풀이
const calculatedArr = []
function soo(arr, count){
    for(let i = 0; i<=arr.length - count; i++){
        let total = 0
        //count만큼 더한다
        for(let j = i; j<i+count; j++){
            total += arr[j]
        }
        calculatedArr.push(total)
    }
}
soo(arr, count)
console.log(calculatedArr.sort((a,b)=>b-a)[0])