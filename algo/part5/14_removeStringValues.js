/*
Write a function called "removeStringValue"
"removeStringValue" 함수를 작성하세요

Given an object, "removeStringValue" removes any property on the given object whose values are strings.
객체가 주어졌을때 "removeStringValue" 함수는 속성값이 문자열인 모든 속성을 제거합니다.
*/

let obj = {
  name: 'Sam',
  age: 20,
};

removeStringValue(obj);
console.log(obj); // ----> {age: 20}

function removeStringValue(obj) {
  // TODO
  for(let value in obj)
  if (typeof obj[value] === "string"){
    delete obj[value]
  }
  return obj
}


//https://jjtil.netlify.app/tutorial/2019-11-14-javascript-daliy-coding-level-1/#removestringvalues