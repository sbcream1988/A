/*
Write a function "transformFirstAndLast" that takes in an array.
and returns an object with
배열을 입력으로 받고 다음 조건에 만족하는 객체를 반환하는 함수 "transformFirstAndLast"함수를 작성하세요

1. the first element of the array as the object's key and
배열의 첫번째 요소를 객체의 키로 가집니다.
2. the last element of the array that key's value
배열의 마지막 요소를 해당 키의 값으로 가집니다.

*/

let input1 = ['Queen', 'Elizabeth', 'of Hearts', 'Beyonce'];
let output1 = transformFirstAndLast(input1);
console.log(input1); //['Queen', 'Elizabeth', 'of Hearts', 'Beyonce'];
console.log(output1); // { Queen: "Beyonce"}

let input2 = [
  '프로도',
  '무지',
  '어피치',
  '튜브',
  '제이지',
  '콘',
  '네오',
  '라이언',
];
let output2 = transformFirstAndLast(input2);
console.log(input2); // ['프로도', '무지', '어피치', '튜브', '제이지', '콘', '네오', '라이언'];
console.log(output2); // { 프로도: '라이언'}

function transformFirstAndLast(arr) {
  let obj = {}
  obj[arr[0]]=arr[arr.length-1]
  return obj;
  // TODO
  
}


