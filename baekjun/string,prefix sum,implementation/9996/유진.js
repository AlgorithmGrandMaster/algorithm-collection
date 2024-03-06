//한국이 그리울땐 서버에 접속하자
// 총 N개의 줄에 걸쳐서, 입력으로 주어진 i번째 파일 이름이 패턴과 일치하면 "DA", 일치하지 않으면 "NE"를 출력한다.
// 참고로, "DA"는 크로아티어어로 "YES"를, 
// "NE"는 "NO"를 의미한다.

//예시
const count = 3//파일의 개수
const pattern = 'a*d'//패턴(알파벳소문자와 별표한개, <100, 별표는 문자열의 시작과 끝에 없음)
const arr = ['abcd','anestonestod','facebook']//파일이름

const answer = []
const splitedPattern = pattern.split('*')//별표를 기준으로 쪼갠다
for(let i = 0; i<arr.length; i++){
    let isIncludePattern = false
    splitedPattern.map(e => {//'a','d'
        isIncludePattern = false
        if(arr[i].includes(e)){
            isIncludePattern = true
        }
    })
    answer.push(isIncludePattern)

}
answer.map(e => {
    console.log(!!e ? 'DA\n' : 'NE\n')
})