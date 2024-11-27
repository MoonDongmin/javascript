const x = 1;

// 1.
function outer() {
    const x = 10;
    const inner = function () {
        console.log(x); //2.
    };

}

// outer 함수를 호출하면 중첩 함수 inner를 반환
// 그리고 outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거
const innerFunc = outer(); // 3.
// @ts-ignore
innerFunc(); // 4