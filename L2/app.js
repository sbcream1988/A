// 변수 - 자료 저장, 접근할떄 사용
// 선언 - let const 
let age = "3"

for(let i=0; i<age; i=i+1){
    console.log("hello")
}

// 인터프리터 - 한줄씩 읽어나가는거 ex)스크립트 언어 자바스크립트, 파이썬
// 컴파일 - 컴퓨터가 읽을수 있게 번역 ex)c++, c언어, 자바

// runtime error - 실행중 에러
// compile error -  번역중 발생하는 에러

// 데이터 구조 배열, 객체
// 함수, 메소드(method)
// console.log(age>5)
// if(age>5){
//     console.log("5보다 큼")
// }else if(age===3){
//     console.log("임")  age의 데이터 타입이 문자열이기 때문에 나오지 않음 
// }else {
//     console.log("실행")
// }

let i=3
while(i<5)
{ 
    i=i+1
    console.log("터진다")
}

// 배열 특징 순서가있다

let nums = [0,1,2,3,4]
nums.length
let five=nums.push(5)
console.log(five)
nums.unshift("0")
nums.pop()
nums.shift()
console.log(nums[4])

// 객체

let person = {
    "head" : "big",
    "body" : "fat",
    "leg" : "short"
}
//person.head = "small"
person["head"] = "too big"
console.log(person["head"]) //value 접근방법
person.wing = null
person["wing"] = true // 추가할거 쳐주면 됨
delete person.wing // 제거
delete person["leg"]
person.roll = function roll(){
    console.log("구르기")
}
console.log(person)

//일급언어,일급객체,일급시민-모든것을 변수에 담을수 있음

function add(parameter1,parameter2){
    console.log(parameter1+parameter2)
    return parameter1+parameter2 *2
}

console.log(add(3,5))

