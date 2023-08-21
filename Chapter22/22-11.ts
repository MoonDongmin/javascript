var value = 1;

const obj = {
    value: 100,
    foo() {
        // this 바인딩(obj)을 변수 that에 할당
        const that = this;

        // 콜백 함수 내부에서 this 대신 that을 참조함
        setTimeout(function () {
            console.log(that.value);
        }, 100);
    }
};

obj.foo();