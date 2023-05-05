/*
Write a function called "getAllElementsButLast"
"getAllElementsButLast" 함수를 작성하세요.

Given an array "getAllElementsButLast" returns an array with all the elements, but the last
배열이 주어졌을때, "getAllElementsButLast" 함수는 마지막 요소를 제외한 배열을 반환해야 합니다.
*/

let input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output); // --> [1,2,3]
function getAllElementsButLast(array) {
  // TODO
  array.pop(array);
  return array
}


/*
-MDN : Array.prototype.pop()
pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환합니다.
pop 메서드는 배열에서 마지막 요소를 제거하여 그 값을 호출자(caller)에게 반환합니다.

pop은 일부러 일반(generic)입니다; 이 메서드는 배열을 닮은 객체에 호출 또는 적용될 수 있습니다. 
0부터 시작하는 일련의 연속되는 숫자 속성 내 마지막을 반영하는 
length 속성을 포함하지 않는 객체는 어떤 의미 있는 방식으로도 행동하지 않을 수 있습니다.

빈 배열에 pop()을 호출하면, undefined를 반환합니다.
*/