/* 
Summation to n: Let's implement the function sum that takes a single parameter n, and cumputes the sum of all integers u to n starting from 0
n 까지의 총 합 :n 을 매개변수로 받아 0 부터 n까지 모든 수의 총 합을 반환하는 함수를 작성하세요.
*/
let output1 = sum(3)
console.log(output1)

// sum(3); // 6
// sum(4); // 10
// sum(5); // 15


function sum(num){
    let result = 0
    for (let i = 0; i <= num; i ++){
        result = result + i
    }
    return result
}