/* 
convertToNumber 함수가 있습니다. 이 함수는 주어진 파라미터를 숫자의 형태로 변환합니다.

노트
 - 숫자로 변환할 수 없는 경우, NaN(Not a number) 이라는 결과가 나올것입니다.
 - NaN은 순자가 아님을 나타내는 특수한 값으로, 무자열이 아닙니다.
*/

let output = convertToNumber('123');
console.log(output); // --> 123

let output2 = convertToNumber('hello');
console.log(output2); // --> NaN

let output3 = convertToNumber('3.141592');
console.log(output3); // --> 3.141592

function convertToNumber(anything) {
  // TODO
  console.log(convertToNumber)
}
