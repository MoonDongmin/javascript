// 일반 함수 정의: 함수 선언문, 함수 표현식
function foo() {
}

const bar = function () {
};

// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수. 이는 메서드로 인정하지 않음
const baz = {
    x: function () {
    }
};

new foo();
new bar();

new baz.x();

// 화살표 함수 정의
const arrow = () => {
};

new arrow();

// 메서드 정의
const obj = {
    x() {
    }
};

new obj.x();