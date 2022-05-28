/*
Write a function called "greetCustomer"
"greetCustomer" 함수를 작성하세요

Given a name, "greetCustomer" returns a greeting based on
how many times that customer has visited the restaurant, Please refer to the customerData object
고객들의 방문 횟수를 가지고 있는 객체와 이름이 주어졌을때 "greetCustomer" 함수는 손님이 몇번 방문했는지에 따라 다른 인삿말을 반환합니다.
customerData 객체를 참고해 주세요
customerData의 형식은 아래와 같습니다.
*/
let customerData = {
  Joe: {
    visits: 1,
  },
  Carol: {
    visits: 2,
  },
  Howard: {
    visits: 3,
  },
  Harry: {
    visits: 4,
  },
};

/*
The greeting should be different, depending on the name on their reservation
손님들의 예약에 나타나 있는 이름에 따라 인삿말이 달라야 합니다.

Case 1 - Unknown customer (Name is not present in customerData)
처음 방문한 손님(customerData에 이름이 없을경우
*/
let output1 = greetCustomer(customerData, 'Terminator');
console.log(output1); //  'Welcome! is this your first time?'

/*
Case 2 - Customer who has visited only once('visits' value is 1)
한번 방문 했던 적이 있는 손님('visits'의 값이 1인 경우
*/
let output2 = greetCustomer(customerData, 'Joe');
console.log(output2); //  'Welcome back, We're glad you liked us the first visit'

/*
Case 3 - Repeat customer :('visits' value is greater than 1)
여러번 방문한 손님('visits'의 값이 1보다 큰 경우)
*/
let output3 = greetCustomer(customerData, 'Harry');
console.log(output3); //  'Welcome back, Harry! So glad to see you again!'

/*
Note
- your function should not alter the customerData object to update the number of visits
여러분의 함수는 방문수를 업데이트 하기위해 customerData 객체를 수정하여서는 안됩니다.
- Do not hardcode to the exact sample data. This is a BAD IDEA
샘플 데이터를 하드코딩 하지 마세요. 좋지 않은 생각입니다.

if (firstName === 'Joe') {
  // do something
}
*/

function greetCustomer(customerData, firstName) {
  //TODO
  return;
}
