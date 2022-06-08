/*
Wirte a function called "getAllElementsButFirst"
getAllElementsButFirst 함수를 작성하세요.

Given an array, "getAllElementsButFirst" returns an array with all the elements,
but the first
배열이 주어졌을 때 , "getAllElementsButFirst" 함수는 첫번째 요소를 제외한 배열을 반환해야 합니다.
*/

let input = [1, 2, 3, 4];
let output = getAllElementsButFirst(input);
console.log(output); // --> [2,3,4]
function getAllElementsButFirst(array) {
  // TODO
  let newArray=array.slice(1);
  // newArray.shift()
  // console.log("newArray:",newArray)
  // console.log("input:",input)

  return newArray;
  }

console.log(input)
/*
-MDN: Array.prototype.shift()
shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다.
 이 메서드는 배열의 길이를 변하게 합니다.
 hift 메서드는 0번째 위치의 요소를 제거 하고 연이은 나머지 값들의 위치를 한칸 씩 앞으로 당깁니다. 그리고 제거된 값을 반환 합니다. 
 만약 배열의 length가 0이라면 undefined를 리턴 합니다.

shift는 의도적인 일반형태로써; 이 메서드는 배열과 유사한 형태의 객체에서  호출 하거나 적용 할 수 있습니다. 
연속된 일련의 마지막 항목을 나타내는 길이 속성을 가지고 있지 않은 객체의 제로베이스 수치 속성에는 의미 있는 
작동을 하지 않을 수 있습니다.
*/