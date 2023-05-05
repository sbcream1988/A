/*
Write a function called "joinArrayOfArrays"
"joinArrayOfArrays" 함수를 작성하세요.

Given an array of arrays "joinArrayOfArrays" returns a single array containing the lements of the nested array.
배열들의 배열이 주어졌을때, "joinArrayOfArrays" 함수는 배열들의 요소를 모두 담고 있는 단일 배열을 반환합니다.
*/
// concat , for 문
let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);
console.log(output); //--> [1, 4, true, false, 'x', 'y']

function joinArrayOfArrays(arr) {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2 = arr2.concat(arr[i]);
    console.log(arr[i]);
  }
  return arr2;
}
  //TODO