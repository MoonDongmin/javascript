var var1 = 1; // 가장 바깥 영역

if (true) {
    var var2 = 2;  // 코드 블록 내에서 선언
    if (true) {
        var var3 = 3; // 중첩된 코드 블록 내에서 선언
    }
}

function foo() {
    var var4 = 4;  // 함수 내에 선언

    function bar() {
        var var5 = 5;  // 중첩된 함수 내에 선언
    }
}

console.log(var1);
console.log(var2);
console.log(var3);
// @ts-ignore
console.log(var4);
// @ts-ignore
console.log(var5);