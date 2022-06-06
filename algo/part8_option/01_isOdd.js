/*
Write a function called "isOdd"
"isOdd" 함수를 작성하세요

Given an integer, "isOdd" returns whether the integer is odd or not
숫자가 주어졌을때, "isOdd" 함수는 주어진 숫자가 홀수 인지 아닌지를 반환합니다.
*/

let output1 = isOdd(42);
console.log(output1); // ---> false

let output2 = isOdd(19);
console.log(output2); // ---> true

function isOdd(num) {
  //TODO
  if(num % 2 !==0){
    return true
  }else{
    return false}
}
