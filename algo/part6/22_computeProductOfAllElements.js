/*
Write a function called "computeSumOfAllElements"
"computeSumOfAllElements" 함수를 작성하세요.

Given an array of numbers, "computeSumOfAllElements" returns the products of all the elements in the given array
숫자의 배열이 주어졌을때, "computeSumOfAllElements" 함수는 주어진 배열의 모든 요소의 곱을 반환합니다.

Notes:
- if given array is empty, it should return 0
만약 배열이 주어졌다면, 0을 반환 해야 합니다.
*/

let output = computeSumOfAllElements([2, 5, 6]);
console.log(output); // ---> 60


function computeSumOfAllElements(arr){
    let sum = 1
    for (let i=0; i < arr.length; i++){
        sum = sum * arr[i]
    }
    return sum
}