var value = 1;

const obj = {
    value: 100,
    foo() {
        console.log("foo's this: ", this);
        // 콜백 ㅎ마수 내부의 this에는 전역 객체가 바인딩됨
        setTimeout(function () {
            console.log("callback's this: ", this);
            console.log("callback's this.value", this.value);
        }, 100);
    }
};

obj.foo();