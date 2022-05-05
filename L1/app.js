console.log("Hello world");
// 조건 반복?
//1. 조건문 
// if (조건부) {실행부}
// let condition = "10";
// if (condition > 5) {
//     console.log("condition > 5")
// }else if(condition === 10 ) {
//     console.log("condition === 10")
// }else if(condition < 5) {
//     console.log("condition <5")
// }else {
//     console.log("NaN")
// }
// >= 크거나 같다. 부등호 먼저 <= 작거나 같다.
// 실행되는건 처음 걸리는 거
// if, if else, else if 중복 가능

//2. 반복
// let condition = 10
// while (condition > 5) {
//     console.log("condition", condition)
// condition = condition - 1
// }
// 
// for (기준 ; 조건; 증감) {실행부}
// for (let i= 0; i < 5; i = i + 1) {
//     console.log(i)
// }
// 기준->조건->실행->증감->조건->실행 반복되다 조건에서 false 나오면 끝
// 인터프리터 언어

// 배열
// 기본 형태 : []
let nums = ["html", "js", "css"]
 for (let i =0; i <nums.length; i = i + 1){
     console.log(nums[i])
 }
// 배열.length = 개수
// index [] 접근

nums.push("string")
console.log(nums)
// 밀어넣음

// nums.pop()
// console.log(nums)
// 가장 마지막에 있는것을 뺌

// nums.shift()
// console.log(nums)
//처음 뺌

// nums.unshift("java")
// console.log(nums)
//집어 넣음

// object
let name = "홍길동"
let age = 2
let country = "USA"
let GD = {
    "name" : "홍길동",
    "age" : 2,
    "country" : "USA",
    "children" : ["첫째", "막내"]

}
console.log(GD.children.push("사생"))
console.log(GD)
//오브젝트. 카테고리화 {} key value 구분 ,로

// GD["name"] === GD.name