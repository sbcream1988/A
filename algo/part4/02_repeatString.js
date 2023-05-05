/*
Write a function called "repeatString",
("repeatString"함수를 작성하세요)
Given a string and a number, "repeatingString" returns 
the given string repeated the given number of times
("repeatString"함수는 주어진 문자열을 주어진 숫자만큼 반복하여 반환해야 합니다.)
*/
let output = repeatString('code', 3);
console.log(output); // ===> 'codecodecode'

function repeatString(string, num) {
  // TODO
  let a = ''
  for(let i=0; i < num; i=i+1){
   a = a + string
  }
  return a
}
// comment

/*
HINT 

2 + 3 => 5
"H"+"E"+"L"+"L"+"O" => "HELLO"
*/
