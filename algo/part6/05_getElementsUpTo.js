/*
Write a function called "getElementsUpTo"
"getElementsUpTo" 함수를 작성하세요.

Given an array and index , "getElementsUpTo" returns an array with all the elements up until,
but not including, the element at the given index
배열과 인덱스가 주어졌을때, "getElementsUpTo"함수는 주어진 배열의 인덱스 이전 요소들을(자신은 포함사지않고)
새로운 배열로 반환해야 합니다.

NOTE:
- in order to do this you should be familiar with the 'slice' method
위 문제를 해결하기 위해서는 slice 메소드에 익숙하셔야 합니다.

- MDN: slice() 메서드는 어떤 배열의 begin부터 end까지(end 미포함)에 대한 얕은 복사본을 
새로운 배열 객체로 반환합니다. 
원본 배열은 바뀌지 않습니다.
arr.slice([begin[, end]])
*/

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3);
console.log(output); // --> ['a','b','c']

function getElementsUpTo(array, n) {
  let array2 = array.slice(0,n)
  return array2
  // TODO

}
