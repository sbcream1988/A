/*
 countNumberOfKeys 함수를 작성하세요

Given an object "countNumberOfKeys" returns how many properties
the given object has.
객체가 주어졌을때, "countNumberOfKeys"함수는 객체안에 있는 속성들의 갯수를 반환해야 합니다.
*/

let obj = {
  a: 1,
  b: 2,
  c: 3,
};
let output = countNumberOfKeys(obj);
console.log(output); // ---> 3

function countNumberOfKeys(obj) {
  // TODO
  let count=0 
  for(key in obj){
    count++
  }
  return count
}

console.log("keys",Object.keys(obj))
console.log("values",Object.values(obj))