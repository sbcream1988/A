/*
write a function "fromListToObject" which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair
2차원 배열을 입력으로 받고 배열안에 있는 배열의 요소 페어를 키-값 페어로 가지는 객체를 반환하는 함수 "fromListToObject" 함수를 작성하세요
*/

let input = [
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', 1964],
];
let output = fromListToObject(input);
console.log(output); // {make: "Ford" , model:"Mustang", year: 1964}

function fromListToObject(array) {
  // TODO
  let obj = {}
  for (let i=0 ; i<array.length; i=i+1){
  obj[array[i][0]] = array[i][1]
}
  return obj
}
