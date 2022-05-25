/*
Given 3 strings, "findShortestOfThreeWords" returns the shortest of the given strings
문자열 3개가 주어졌을때, "findshortestOfThreeWords" 함수는 주어진 문자열 중 가장 짧은 문자열을 반환해야 합니다.

Notes:
    - if there are ties, it shouuld return the first word in the parameters list.
    만약 동률이 있다면 그 중 앞에 있는 문자열을 반환해야 합니다.
*/

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

function findShortestOfThreeWords(word1, word2, word3) {
  // TODO
  if (word1.length <= word2.length) {
    return word1;
  }
  if (word1.length <= word3.length) {
    return word1;
  }
  if (word2.length <= word3.length) {
    return word2;
  } else {
    return word3;
  }
}

// comment
/*
19 줄 shortest는 선언 하지 않았는데 사용하고 있네. word1.length =shortest 선언 했다가 다시 지우고 실행해보고 지우고 하다가 남겨진거

참고: 조건문은 위에서 부터 순서대로 읽다가 조건에 맞는거 1개(실행부) 실행하면 조건문 실행은 끝나고 다음 줄(25줄)로 넘어간다.

*/
