// 암묵적 전역
function foo() {
    // @ts-ignore
    x = 10;
}

foo();

// @ts-ignore
console.log(x);

