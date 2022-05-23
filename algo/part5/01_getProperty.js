/*
Write a function called "getProperty"
"getProperty" 함수를 작성하세요.

파라미터로 객체와 키를 받는 "getProperty" 함수가 있습니다. 이 함수는 주어진 객체와 키를 이용하여 속성값을 찾아 리턴합니다.

노트:
- 만일 주어진 키가 객체의 속성에 없다면, undefinded를 리턴하면 됩니다.
*/
let person = {
  name: 'steve',
  age: 16,
};

let output1 = getProperty(person, 'name');
console.log(output1); // ---> 'Steve'
let output2 = getProperty(person, 'age');
console.log(output2); // ---> 16

function getProperty(obj, propertyName) {
  return obj[propertyName]; //.?
}
