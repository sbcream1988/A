/*
Given a name and a password "areValidCredentials", returns true if the name is longer than 3 characters,
AND, the password is at least 8 characters long, Otherwise it returns false
이름과 비밀번호가 주어졌을때, "areValidCredentials" 함수는 이름이 3글자보다 길고 비밀번호가 8글자 이상이면 true를 반환합니다.
*/

let output = areValidCredentials('Rit', 'mylon');
console.log(output); // --> true

function areValidCredentials(name, password) {
  // TODO
  if (name.length > 3 && password.length >= 8) return true;
  else {
    return false;
  }
}

// comment Good
