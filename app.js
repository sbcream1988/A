// 최상위
const body = document.body;
let arr = [];

function makeHello(num) {
  let el = document.createElement('div');
  el.innerHTML = 'Hello  ' + '.....' + num;

  el.addEventListener('mousedown', function () {
    console.log((timestamp = new Date().getHours()));
  });

  body.append(el);
}

for (let i = 0; i < 10; i++) {
  arr.push(makeHello(i));
}

// CSS 3개 완강 + 온라인 튜토리얼즈 1개 이상 따라하기
