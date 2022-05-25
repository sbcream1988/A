/*
Write a function called "countCharacter"
"countCharacter" 함수를 작성하세요.

Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the gien string
문자열과 문자가 주어졌을때, "countCharacter" 함수는 주어진 문자열에서 주어진 문자가 몇개가 있는지를 반환해야 합니다.
*/
let output = countCharacter('I am a hacker', 'a');
console.log(output); // ---> 3

function countCharacter(str, char) {
   let counter = 0
  for (let i=0; i < str.length; i++){
    if (str[i] === char){
     counter = counter +1 
    }
  }
  return counter
}
// comment

/*
12줄 선언을 했으면 뭘 해야지.. 안할꺼면 지우고.

15줄 반환을 할거면 뭔가 적고, 아님 괄호 지우고.

for문 조건에서 0부터 시작, 실행부가 실행되고나서 1씩 증가 하면서 조건이 맞으면 실행부는 계속 실행된다..
  0부터 시작하고, 1씩 증가하는데, i가 str.length(13) 보다 큰 경우가 있을까?
  
*/
 