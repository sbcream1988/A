/*
Write a function called "addToBackNew"
"addToBackNew" 함수를 작성하세요.

Given an array and an element "addToBackNew" returns a clone of the given array,
with the given element added to the end 
배열과 요소가 주어졌을때, "addToBackNew" 함수는 주어진 배열의 복사본 끝에 주어진 요소가 추가된 배열을 반환합니다.

important: It should be a NEW array instance, not the original arry instance.
*/

let input = [1, 2];
let output = addToBackNew(input, 3);
console.log(input); //--> [1,2]
console.log(output); // --> [1,2,3]

function addToBackNew(array, element) {
  // TODO
  let array2 = array.slice()
  array2.push(element)
  return array2
}
