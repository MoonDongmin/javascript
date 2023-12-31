// var 키워드로 선언한 전역 변수
var foo = 1;
console.log(window.foo);

// 선언하지 않은 변수에 값을 암묵적 전역. bar는 전역 변수가 아니라 전역 객체의 프로퍼티임
// @ts-ignore
bar = 2;
// @ts-ignore
console.log(window.bar);

// 전역 함수
function baz() {
    return 3;
}

console.log(window.baz());