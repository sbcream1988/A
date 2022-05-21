/*
Write a function called "getLastElementOfProprty"
"getLastElementOfProprty" 함수를 작성하세요

Given an object and a key ."getLastElementOfProprty" returns the last element of an array located at the given key
객체와 키가 주어졌을때, "getLastElementOfProprty" 함수는 주어진 키에 위치한 배열의 마지막 요소를 반환합니다.

Note
 - if the array is empty, it should return undefined
 만약 배열이 비어있다면 undefined를 반환해야합니다.
- if the property at the given key is not an array, it should return undefined
만약 주어진 키에 해당하는 속성값이 배열이 아니라면, udefined 를 반환해야합니다.
 - if there is no property at the key, it should return undefined
 만약 주어진 키에 속성값이 없다면, undefined를 반환해야합니다.

*/

let obj = {
  key: [1, 2, 5],
};
let output = getLastElementOfProprty(obj, 'key');
console.log(output); // --> 5
function getLastElementOfProprty(obj, key) {
  // TODO
  return;
}
