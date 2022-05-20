/*
Given 3 words, "findMinLengthOfThreeWords" returns the length of the shortest word.
단어 세개가 주어졌을때 , "findMinLengthOfThreeWords" 함수는 세 단어 중 가장 짧은 단어의 길이를 반환합니다.
*/

let output = findMinLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 1

function findMinLengthOfThreeWords(word1, word2, word3) {
  // TODO
  if(word1.length <= word2.length){
    return word1.length
  }if(word1.length <= word3.length){
    return word1.length
  }if(word2.length <= word3.length){
    return word2.length
  }else{return word3.length}
  ;
}
