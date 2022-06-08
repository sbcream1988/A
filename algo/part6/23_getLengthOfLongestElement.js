/*
Write a function called "getLengthOfLongestElement"
"getLengthOfLongestElement" 함수를 작성하세요.


Given an array "getLengthOfLongestElement" returns the length of the longest string in the given array
배열이 주어졌을때, "getLengthOfLongestElement" 함수는 주어진 배열에서 가장 긴 문자열의 길이를 반환합니다.

Note:
- it should return 0 if the array is  empty
만약 배열이 비어있다면, 0을 반환해야 합니다.
*/
let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

function getLengthOfLongestElement(arr) {
let A=0 
if (arr.length===0){
    return "0"
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >A) {
        A = arr[i].length;
    }
}
}