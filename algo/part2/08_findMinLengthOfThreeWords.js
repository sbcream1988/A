/*
Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.
단어 세개가 주어졌을때 , "findMinLengthOfThreeWords" 함수는 세 단어 중 가장 짧은 단어의 길이를 반환합니다.
*/

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

function findMinLengthOfThreeWords(word1, word2, word3) {
  // TODO
  if (word1.length <= word2.length) {
    return word1.length;
  }
  if (word1.length <= word3.length) {
    return word1.length;
  }
  if (word2.length <= word3.length) {
    return word2.length;
  } else {
    return word3.length;
  }
}

// comment
/*
2-06 문제와 같은 이유.

hint: 3개이상을 비교할때..
컴퓨터는 2개만 서로 비교할수 있다.
사람도 손이 2개 다.
여러 장의 카드가 있다.
먼저 2개 카드 들고 (앞에 2개든 뒤에 2개든 .. 순서!!! 대로 들어야 counting 이 쉽다.)
비교하고 큰거 버린다.
  
  카드를 버린 손으로 선택되지 않은(다음 순서) 카드를 든다.
  비교한다.
  큰거 버린다.
  남은 카드가 있는지 확인한다.

  35~ 38 줄 코드를 카드가 없을 때 까지 (마지막 카드를 비교할때까지) 확인한다.

없으면 들고있는 카드가 가장 작은 카드이다.

*/
