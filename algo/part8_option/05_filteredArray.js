/*
return a new array that all elements passed testFunction without using filter method
filter 메소드를 사용하지 않고 testFunction 함수를 통과하는 요소로만 이루어진 배열을 반환하는 함수를 작성하세요
*/

let isOdd = function (num) {
  if (num % 2) {
    return true;
  } else {
    return false;
  }
};

filteredArray([1, 2, 3], isOdd); // [1,3]

/*
Tip:
you don't have to make testFunction. just use it in filteredArray function
testFunction을 작성할 필요는 없습니다. 그냥 filteredArray 함수 안에서 바로 사용하세요.
*/

// KS comment : 쬐끔 어려울수 있는데, 함수도 변수에 담아서 전달할수 있고 실행하수 있다 생각하면 해결 할수도 ??

function filteredArray(array, testFunction) {
  // TODO
  return;
}
