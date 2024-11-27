var foo = function () {
    return 1;
}

// 일반적인 함수로 호출
foo();

// 생성자 함수로 호출
new foo();

// 메서드로 호출
var obj = {foo: foo};
obj.foo();