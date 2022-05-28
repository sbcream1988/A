/*
Write a function removeOddValues that takes an object as an argument and returns an object with all key/value pairs removed for which the value holds an odd number.
"removeOddValues" 함수를 작성하세요 
객체가 주어졌을때, "removeOddValues" 함수는 주어진 객체의 key/value 페어 중 value 가 홀수 숫자인 페어가 제거된 객체를 반환하세요

You'll need to use the "typeof" operator to first check that the values are numbers:
value가 숫자인지 확인하기 위해서는 "typeof"연산자를 먼전 사용해야 합니다.
*/

typeof 'Hello'; // ==> ?
typeof 3; // ==> ?

removeOddValues({ a: 1, b: 2, c: 3, d: 'Hello' }); // --> {b:2,d:'Hello'}
removeOddValues({ a: 1, b: 2, c: 8 }); // --> {b:2, c:8}

function removeOddValues(obj) {
  // TODO
  return;
}
