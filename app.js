// 최상위
// const body = document.body;
// let arr = [];

// function makeHello(num) {
//   let el = document.createElement('div');
//   el.innerHTML = 'Hello  ' + '.....' + num;

//   el.addEventListener('mousedown', function () {
//     console.log((timestamp = new Date().getHours()));
//   });

//   body.append(el);
// }

// for (let i = 0; i < 10; i++) {
//   arr.push(makeHello(i));
// }

// CSS 3개 완강 + 온라인 튜토리얼즈 1개 이상 따라하기

let nums = [1,2,3,4]
// for (let i=0; i<nums.length; i++){
//   console.log(nums[i])
// }

// for (let num of nums){
//   console.log(num*2)
// }

let a = [0,1,2,3].forEach(function (num, index){
  // run nums.length 
//읽씹....할때 씀
// return 없는 함수
})

let b = nums.map(function(num, index){
  return num*2
})

console.log(a,b)

