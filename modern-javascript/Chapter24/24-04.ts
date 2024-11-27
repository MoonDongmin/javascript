const x = 1;

function foo() {
    const x = 10;

    // 상위 스코프는 함수 정의 환경에 따라 결정
    // 함수 호출 위치와 상위 스코프는 아무런 관계가 없음
    bar();
}

// 함수 bar는 자신의 상위 스코프, 즉 전역 렉시컬 환경을 [[Environment]]에 저장하여 기억함
function bar() {
    console.log(x);
}

foo();
bar();