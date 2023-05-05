/*
Write a function called "getNthElementOfProperty"
"getNthElementOfProperty" 함수를 작성하세요

Given an object and a key "getNthElementOfProperty" retrns the nth element of an array located at the given key
객체와 키가 주어졌을때, "getNthElementOfProperty" 함수는 주어진 키에 위치한 배열의 n번째 요소를 반환합니다.

Note
 - if the array is empty, it should return undefined
 만약 배열이 비어있다면 undefine를 반환해야합니다.

 - if n is out of rage, it should return undefined
 만약 n 범위를 벗어난다면, undefined를 반환해야 합니다.

 - if there is no property at the key, it should return undefined
 만약 주어진 키에 위치하는 속성이 없다면, undefined를 반환해야합니다.
*/
let obj = {
  key: [1, 2, 6],
};

let output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2

function getNthElementOfProperty(obj, key, n) {
  // TODO
  return;
}
