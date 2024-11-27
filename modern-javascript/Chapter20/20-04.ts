// 코드의 선우에 ‘use strict’; 를 위치시키지 않으면 strict mode가 제대로 동작하지 않음
function foo() {
    // @ts-ignore
    x = 10; // 에러를 발생시키지 않음
    'use strict';
}

foo();