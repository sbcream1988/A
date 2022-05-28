/*
문자열로 이루어진 배열이 주어졌을때, thirdGreatest 함수는 주어진 배열에서 세번째로 긴 달어를 반환합니다.
그 중, 동률일 때는 뒤에 있는 단어를 반환해줘야 합니다.
*/

let output1 = thirdGreatest(['hello', 'world', 'before', 'all']); // world
let output2 = thirdGreatest(['hello', 'world', 'after', 'all']); // after

/*
output2 는 앞에 3개가 모두 5글자이기때문에 마지막 단어를 반환하기 때문이빈다. 배열은 항상 적어도 문자열 세개를 가지고 있으며
각각의 문자열은 오직 글자만을 포함하고 있습니다.
*/
