/*
Write a functionn called "removeFromBackOfNew"
"removeFromBackOfNew" 함수를 작성하세요.

Given an array "removeFromBackOfNew" returns a new array containing all but the last element of the given array
배열이 주어졌을때, "removeFromBackOfNew" 함수는 마지막 요소를 제외한 모든 요소를 가지고 있는 새로운 배열을 반환해야 합니다.

Note: 
    - You should be familiar with the 'slice' mothod
    위 문제를 해결하기 위해서는 'slice' 메소드에 익숙하셔야 합니다.
*/

let arr = [1, 2, 3];
let output = removeFromBackOfNew(arr);
console.log(output); // --> [1,2]
console.log(arr); // --> [1,2,3]

function removeFromBackOfNew(array) {
  // TODO
  let arr2=array.slice(0, array.length-1)
  return arr2
}
