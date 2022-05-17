/*
getType함수가 있습니다. 이 함수는 주어진 파라미터의 타입을 리턴합니다.
- NOTE:
  - typeof 키워드는 값의 타입을 판단할 수 있는 키워드 입니다.
  - typeof 를 이용해 배열의 타입을 확인하면, 'object'라고 나올수 있습니다.
  배열과 객체는 어떻게 구분할수 있을까요?
  - 배열과 객체를 구분하려면 Array.isArray메소드를 사용하면 됩니다.
*/
let output1 = getType('hello');
console.log(output1); // ---> 'string'
let output2 = getType(10);
console.log(output2); // ---> 'number'
let output3 = getType(true);
console.log(output3); // ---> 'boolean'
let output4 = getType({ name: 'Steve' });
console.log(output4); // ---> 'object'
let output5 = getType([100, 200, 300]);
console.log(output5); // ---> 'array'

function getType(anything) {
  // TODO
  return;
}
