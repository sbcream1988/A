console.log(1);

console.log(2); // 한줄 주석 : 라인에서 "//"뒤로는 컴퓨터는 읽지 못함.
console.log(1,3,5,7,9);
//로그값에 여러개도 넣을수 있음
// ctrl+//
/* 시작 */

//타입 : 종류 형식

// 숫자 Number (int, double, float)
1;
2;
3;
4;
// 문자열(String): 여러개의 문자
// 특징 : 더블쿼트"" 싱글쿼트'' 백틱``
'hello'
"hello"

// 참거짓 bool(ean) 부울 불린 bool값 : 
true;
false;

// 없음
null; //의도적인 없음
undefined; //의도치 않은 없음

// 객체 object {}- 자바스크립트 
// 특징 - 순서가 없다 key와 value 쌍으로 구성되어있다 ex)사전
// key는 보통 문자열 string
obj = {
    "hello": '안녕',
    "일": '1',
    "이": '2',
}
// 배열 array []
//특징 - 순서가 있다
// 단위 index 는 0부터 시작
//번째와 index는 같지 않다
//갯수는 알고있는대로
[0, 1, 2, 3, 4];

//함수 function
/*
-정의(선언)
키워드 + (이름) + (재료, 매개변수) + {실행부}}
function add (parameter1, param2, param3) {} //기명함수 -여러번 호출(재사용),의미 부여
function () {} //무기명(익명) 함수

-사용(호출,실행)
이름(아규먼트) + (실행할 재료)
소괄호 끝나면 무조건 함수 실행

*반환 return : 1. 해당 함수를 종료하 2. 가지고 나간다
중간에 return 들어가면 그대로 함수 종료

숫자 더하면 합
문자+문자 숫자+문자조합은 그냥 나열됨 string이 됨
*/

function add(num1, num2) {console.log(num1+num2);}

add(1,2);
add(1,3)

function multi(p1, p2) {console.log(p1*p2);}
0
multi(2,3); //문자열안에 숫자는 숫자로 인식
multi('이', '3'); //Not a Number(NaN) type:number
multi(2, '3');
multi(2, '');

//키워드,변수
//키워드 ex) function, let, const, typeof, 타입(Number, String, Bool, Array)
//function //함수
//let: 선언 키워드 사이즈, 타입, 내용물 기록
//변수 선언 값 주입
//let a = "1"; 변수선언, 값 주입
let a //선언 키워드 + 변수이름
a = '1' //주입 변수 이름 = 
console.log(a, typeof a);

const b =1; // const는 변하지 않는 값 : 상수(항상 일정한수) 
//선언할때 키워드 없이 변수만 접근 const는 이름 값 같이 입력 ex)파이

//Naming 주의사항
// 1. 숫자로 시작하면 안됨
// 2. 키워드 사용 안된다
// 3. 한글, 이모지 권장 안함
// 4. 시스템 함수 x

let a1 = "1";
a1 = a1 + 2 
// 대입연산자 =
// === 수학적 등호(동등연산자)
console.log(typeof a1);

