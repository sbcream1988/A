/*
Given a word, "isEvenLength" returns whether the length of the word is even
단어가 주어졌을때, "isEvenLength" 함수는 주어진 단어의 길이가 짝수인지 반환해야 합니다.
 */

let ouput = isEvenLength('wow');
console.log(ouput); // --> false

function isEvenLength(word) {
  // TODO
  return word.length % 2 === 0;
}

// comment Good
