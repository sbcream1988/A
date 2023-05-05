/*
점수가 주어졌을때, "convertScoreToGrade" 함수는 주어진 점수와 대응하는 등급을 문자열로 반환합니다.

Notes:
    - (100 - 90) ==> 'A'
    - (89 - 80) ==> 'B'
    - (79 - 70) ==> 'C'
    - (69 -60) ==> 'D'
    - (59 - 0) ==> 'F'
    - 만약 주어진 점수가 100을 초과하거나 0 미만 이라면'INVALID SCORD' 를 반환해야 합니다.

    let output = convertScoreToGrade(91);
    console.log(output); // --> 'A'
    
    자주 실수하는 것들

    마치 다음 문법은 잘 작동하는 것처럼 보이지만, 실제로 문제가 있습니다.
    let score = 75;
    70<score<80 // true
    score의 값을 45으로 한번 바꿔 보겠습니다.
    score = 45;
    70<score<80 // true

    뭔가 조금 이상합니다. 실제로 위 코드는 (70 < score) < 80 , 즉 false < 80 의 연산입니다.
    왜? false < 80 가 true 인지는 크게 중요하지 않습니다. (비교는 같은 타입일 경우에만 의미가 있습니다.)
    다만 저렇게 쓰면 안된다는 것만 기억하십시오.

    "70보다 크고, 80보다 작은 숫자" 라는 조건 안에는 두가지 조건이 포함되어 있습니다.
    즉 && 연산자가 필요합니다. 다음과 같이 작성해야 한다는 점을 반드시 기억해두세요!
    70 < score && score < 80
*/

// function convertScoreToGrade(score) {
//   // 여기에 코드를 작성하세요
//   if (score > 100 || score < 0){
//     return "'INVALID SCORE'"
//   }else if (90 <= score && score <= 100){
//     return "'A'"
//   }else if (80 <= score ){
//     return "'B'"
//   }else if (70 <= score && score < 80){
//     return "'C'"
//   }else if (60 <= score && score < 70){
//     return "'D'"
//   }else if (0 <= score && score < 60){
//     return "'F'"
//   }
// }

let output = convertScoreToGrade(10);
    console.log(output); // --> 'A'

    // function convertScoreToGrade(score) {
    //   // 여기에 코드를 작성하세요
    //   if (score > 100 || score < 0){
    //     return "'INVALID SCORE'"
    //   }else if (80 <= score ){
    //     return "'B'"
    //   }else if (90 <= score && score <= 100){
    //     return "'A'"
    //   }
    // }
    
    function convertScoreToGrade(score) {
        // 여기에 코드를 작성하세요
        if (score > 100 || score < 0){
          return "'INVALID SCORE'"
        }else if (90 <= score && score <= 100){
          return "'A'"
        }else if (80 <= score ){
          return "'B'"
        }else if (70 <= score ){
          return "'C'"
        }else if (60 <= score ){
          return "'D'"
        }else {
          return "'F'"
        }
      }