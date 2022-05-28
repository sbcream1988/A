/*
Write a function called "modulo"
"modulo" 함수를 작성하세요

Given 2 numbers, "modulo" returns the remainder after dividing num 1 by num2
두 숫자가 주어졌을때, "modulo" 함수는 첫번째 수를 두번째 수로 나눴을때 나머지 값을 반환합니다.

It should behave as described in the canonical documentation(MDN) for the Javascript remainder operator
아래 문서에서 설명된 자바스크립트의 나머지 연산자 처럼 동작해야 합니다.
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Remainder

Note
- Do not use the actual built-in modulo (aka 'remainder') operator(%) in your implementation
이미 구현되어 있는 나머지 연산자(%)를 사용하지 마세요
- 0 % ANYNUMBER = 0 
0 % 아무숫자 = 0
- ANYNUMBER % 0 = NaN
아무숫자 % 0 = NaN
- If either operand is NaN, then the result is NaN
두수 중 하나라도 NaN 이라면, 결과값은 NaN 입니다.
- Modulo always returns the sign of the first number
modulo 함수는 항상 첫번째 숫자의 +/- 값을 반환합니다.
*/
let output = module(25, 4);
console.log(output); // ---> 1
