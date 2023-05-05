/*
숫자가 주어졌을때, "isEven" 한수는 주어진 숫자가 짝수인지 반환합니다.
*/

let output = isEven(4);
console.log(output); // -> false

/*
힌트
- 짝수는 어쩐 특징을 가지고 있나요?
- 짝수와 숫자 2의 관계는 어떻게 되나요?
- 나머지 연산지(%)라는 것이 있습니다. 해당 내용을 MDN 문서에서 읽어보세요.
 
다음을 콘솔에서 입력하면, 어떤 결과가 나오나요?
ex) 5 % 2 // ?

 */

function isEven(num) {
  if(num%2 === 0){
  // 여기에 코드를 작성하세요
    return true
  }else if(num%2 !== 0){
    return false
  }
}
