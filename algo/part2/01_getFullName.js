/*

Given a first and a last name, "getFullName" returns a single string with the given first
and last names separated by a single space.(이름과 성이 주어졌을때, "getFullName"함수는 이름과 성이
띄어쓰기 하나를 사이에 둔 단일 문자열을 반환해야 합니다.)
*/

let output = getFullName('Joe', 'Smith');
console.log(output); // -> 'Joe Smith'

function getFullName(firstName, lastName) {
  // TODO
  return "'" + firstName + ' ' + lastName + "'";
}

// comment
/*
9줄의 결과로 ' ' 가 붙은 이유는 String 이란걸 알려주려고 하는것임
return 할때, " ' " 없어도 됨.
*/
