//나는야 포켓몬 마스터 이다솜
//총포캣몬수와 문제수가 주어지고
//문제에 대한 답은 입력으로 숫자가 들어왔다면 그 숫자에 해당하는 포켓몬의 이름을, 
//문자가 들어왔으면 그 포켓몬의 이름에 해당하는 번호를 출력한다.

// 주어지는값 예시
//첫번째줄 26 5: 총포캣몬수와 문제수
const poketmonCount = 26
const questionCount = 5
//나머지 줄: 포켓몬과 문제수
const arr = ['Bulbasaur', 'Ivysaur', 'Venusaur','...']
const answer = []
// 풀이
//나머지 줄에서 5개만 잘라서 question에 담는다
const question = arr.splice(poketmonCount, questionCount)
//question을 돌면서 포켓몬을 맞춘다.
for(let i = 0; i<question.length; i++){
    if(isNaN(question)){//문자열
        //나머지 줄을 돌면서 주어진 문자열과 
        //해당 문자열과 일치하는 값의 index
        answer.push(arr.indexOf(question))
    }else{
        //나머지 줄을 돌면서 주어진 숫자와 
        //해당 index에 일치하는 포켓몬명
        answer.push(arr[question])
    }
}
answer.map(e => {
    console.log(`${e}\n`)
})