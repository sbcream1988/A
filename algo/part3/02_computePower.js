/*

Given a number and an exponent, "computePower" returns the given number, raised to the given exponent
숫자와 지수가 주어졌을때, "computePower" 함수는 숫자와 지수만큼 제곱된 값을 반환해야 합니다.
*/

let output = computePower(2, 4);
console.log(output); // --> 8

// function computePower(num, exponent) {
//   // TODO
//   return num ** exponent
// }

function computePower(num, exponent) {
  // TODO
  return Math.pow(num,exponent) //Math.pow === base^exponent(mdn)
}
