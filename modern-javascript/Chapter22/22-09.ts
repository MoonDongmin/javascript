// var 키워드로 선언한 전역 변수 value는 전역 객체의 프로퍼티임
var value = 1;
// const 키워드로 성언한 전역 변수 value는 전역 객체의 프로퍼티가 아님
// const value = 1;

const obj = {
    value: 100,
    foo() {
        console.log("foo's this: ", this);
        console.log("foo's this.value: ", this.value);

        // 메서드 내에서 정의한 중첩 함수
        function bar() {
            console.log("bar's this: ", this);
            console.log("bar's this.value: ", this.value);
        }

        // 메서드 내에서 정의한 중첩 함수도 일반 함수로 호출되면 중첩 함수 내부의 this에는 전역 객체가 바인딩됨
        bar();
    }
};

obj.foo();