/*
Given a word, "isOddLength" returns whether the length of the given word is odd.
단어가 주어졌을때 "isOddLength" 함수는 주어진 단어의 길이가 홀수인지 반환해야 합니다.
*/

let output = isOddLength('special');
console.log(output); // --> true

function isOddLength(word) {
  // TODO
  return word.length %2 ===1;
}

function isOddLength(word){
  if(word.length %2 ===1){
    return true
  }else{
    return false
  }
}

// comment
/*

위 코드 
이건 왜? 지웠지?  맞는거 같은데...

아래 코드 
?? 이런 한 조건일때는 true
?? 이러한 조건일때는 false (여기가 없음)
*/
