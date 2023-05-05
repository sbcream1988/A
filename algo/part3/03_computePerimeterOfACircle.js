/*
Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter
원의 반지름이 주어졌을때, "computePerimeterOfACircle" 함수는 원의 둘레를 반환하세요.
*/

let output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345

// function computePerimeterOfACircle(radius) {
//   const pi = 3.141592; //???

//   return radius * 2 * pi;
// }

function computePerimeterOfACircle(radius) {
  return radius * 2 * Math.PI;
}
// comment Good
/*
숫자 관련된 코드는 Math. 하고 뒤에 원하는 기능을 적어주면 됨
수학 관련된 기능은 Math 안에 거의 다~ 만들어 두었다. 최대 최소, 삼각함수, radian, dgree 등등 관련 기능 
만약 3.14 원주율을 가져오고 싶으면.
Math.PI 를 사용하면 된다.

mdn 에서 Math 검색
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math
*/
