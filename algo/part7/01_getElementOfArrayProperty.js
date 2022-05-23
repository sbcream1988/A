/*
"getElementOfArrayProperty" 함수를 작성하세요

객체와 키 , 그리고 숫자로 된 인덱스값이 주어졌을때,
"getElementOfArrayProperty" 함수는 주어진 키에 위치한 배열의 인덱스에 해당하는 값을 반환합니다.

Note:
 - 만약 배열이 비었다면 , undefined 반환해야합니다.
 - 만약 주어진 인덱스 값이 키의 속성값의 범위를 넘어선다면, undefined를 반환해야합니다.
 - 만약 주어진 키에 위치한 속성값이 배열이 아니라면, undefined 를 반홚야합니다.
 - 만약 주어진 키에 위치한 속성이 없다면, undefined 를 반환해야 합니다.

*/

let obj = {
  key: ['jamil', 'Albrey'],
};

let output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'
/*
hint

Array.isArray 를 이용하면 Note 의 몇 가지 조건을 한꺼번에 해결할 수 있습니다.

*/

function getElementOfArrayProperty(obj, key, index) {
  // TODO
  return;
}
