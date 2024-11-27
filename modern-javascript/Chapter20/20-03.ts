// 함수 몸체의 선두에 추가하면 해당 함수와 중첩 함수에 strict mode가 적용
function foo() {
    'use strict';
    // @ts-ignore
    x = 10;
}

foo();