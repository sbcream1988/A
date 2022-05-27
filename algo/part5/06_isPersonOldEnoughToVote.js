/*
Write a function called "isPersonOldEnoughToVote".
"isPersonOldEnoughToVote" 함수를 작성하세요.

Given a "Person" object , that contains an "age" property
"isPersonOldEnoughToVote" returns whether the given person is old enough to vote

"age" 속성을 가지고 있는 "person"객체가 주어졌을때, "isPersonOldEnoughToVote" 함수는 그 사람이 미국에서 합법적으로
투표를 할수 있는 나이인ㅇ지를 반환해야 합니다.

NOTE:
 - the legal voting age in the United States is 18
 미국에서 합법적으로 투표를 할 수 있는 나이는 18살 입니다.
*/

let obj = {
  age: 19,
};
let output = isPersonOldEnoughToVote(obj);
console.log(output); // ---> true

function isPersonOldEnoughToVote(person) {
  // TODO
  if(person["age"] >= 19){
    return true
  }else{ 
    return false;
  }
}
