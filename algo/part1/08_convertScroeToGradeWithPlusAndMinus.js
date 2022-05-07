/*
점수가 주어졌을때, "convertScroeToGradeWithPlusAndMinus" 함수는 주어진 점수와 대응하는 등급을 문자열로 반환합니다.

Notes:
    - (100 - 90) ==> 'A'
    - (89 - 80) ==> 'B'
    - (79 - 70) ==> 'C'
    - (69 -60) ==> 'D'
    - (59 - 0) ==> 'F'
    - 만약 주어진 점수가 100을 초과하거나 0 미만 이라면'INVALID SCORD' 를 반환해야 합니다.
    - 만약 점수의 1의자리가 0-2사이라면 등급과 함께 '-'를 반환해야 합니다.
    - 만약 점수의 1의 자리가 8-9 사이라면 등급과 함께 '+'를 반환해야 합니다.
    - F+ 와 F-는 존재하지 않습니다.

    */
let output1 = convertScroeToGradeWithPlusAndMinus(91);
console.log(output1); // ---> 'A-'

let output2 = convertScoreToGrade(91);
console.log(output2); // --> 'A'

/*
   힌트 
   혹시 70~72 , 73~77, 78~79, 80~82, 83~87, 88~89를 각각 하나하나 조건을 만들고 있진 않나요? 그렇게 풀어도 풀리긴 하겠지만,
   이번엔 나눠서 생각해보면 어떨까요? "10의 자리를 판별하는 조건"의 결과와 "1의 자리를 반별하는 조건"에 대한 결과를 합쳐서 최종 결과를 낼수 있습니다.

   - 예를 들어 "B" 와 "+" 를 합친결과, "C" 와 "-"를 합친 결과가 최종 결과가 되겠죠?
   

*/
function convertScroeToGradeWithPlusAndMinus(scroe) {
  // 여기에 코드를 작성하세요
  return;
}
