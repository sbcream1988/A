// 06_isEvenAndGreaterThanTen
/*
숫자가 주어졌을때 , "isEvenAndGreaterThanTen" 함수는 주어진 숫자가 10보다 크고 짝수인지 반환해야 합니다.

*/

let output = isEvenAndGreaterThanTen(13);
console.log(output); // ---> false

/*
힌트

- 2가지 조건을 한꺼번에 판별하려면, AND 연산자 && 를 쓰거나 if 문을 중첩해야 합니다. 
*/

function isEvenAndGreaterThanTen(num) {
  if (num>10 && num%2===0 ){
    return true;
  }
  else {
    return false;
  }
  // 여기에 코드를 작성하세요
  }