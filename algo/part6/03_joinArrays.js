/*
Write a function called "joinArrays"
"joinArrays" 함수를 작성하세요.

Given two arrays. "joinArrays" returns an array with the elements of "arr1" in order,
followed by the elemens in "arr2"
두 배열이 주어졌을때 "joinArrays" 함수는 첫번째 배열(arr1) 과 두번째 배열(arr2) 순서로 합쳐진 배열을 반환해야 합니다.
*/

let output = joinArrays([1, 2], [3, 4]);
console.log(output); // ---> [1,2,3,4]

/*
You should familiar with the "concat" method for the problem
위 문제를 해열하기 위해서는 "concat"메소드에 익숙하셔야 합니다.

MDN : concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
*/

function joinArrays(arr1, arr2) {
  // TODO
let arr3
arr3 = arr1.concat(arr2)
  return arr3
}
