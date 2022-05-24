/*
n까지의 총 합:n 을 매개변수로 받아 0부터 n 까지 모든 수의 총 합을 반환하는 함수를 작성하세요.

*/
let output1 = sum(3);
console.log(output1); // => 6

let output2 = sum(4);
console.log(output2); // => 10

let output3 = sum(5);
console.log(output3); // => 15

function sum(n) {
  // TODO
  let a = 0;
  for (let i = 0; i <= n; i++) {
    a = a + i;
  }
  return a;
}

// comment Good
