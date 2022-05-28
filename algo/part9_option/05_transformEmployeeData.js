/*
"transformEmployeeData"
사원들의 정보를 다른 형태로 변형 할 수 있는 함수 "transformEmployeeData" 함수를 작성하세요        
사원들의 정보는 아래와 같은 배열로 주어질 수 있습니다.

*/

let input = [
  [
    ['firstName', 'Joe'],
    ['lastName', 'Blow'],
    ['age', 43],
    ['role', 'Clerk'],
  ],
  [
    ['firstName', 'Mary'],
    ['lastName', 'Jenkine'],
    ['age', 36],
    ['role', 'Manager'],
  ],
];

let output = transformEmployeeData(input);
console.log(output);
/*
[
    {firstName : 'Joe', lastName: 'Blow', age: 42, role: 'Clerk'},
    {firstName : 'Mary', lastName: 'Jenkine', age: 36, role: 'Manager'}
]
 */

function transformEmployeeData(array) {
  // TODO
  return;
}
