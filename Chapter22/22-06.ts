// this 바인딩은 함수 호출 방식에 따라 동적으로 결정됨
const foo = function () {
    console.dir(this);
};

// 동일한 함수도 다양한 방식으로 호출할 수 있음

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
// foo 함수 내부의 this는 전역 객체 window를 가리킴
foo();

// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킴
const obj = {foo};
obj.foo();

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킴
new foo();

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정됨
const bar = {name: 'bar'};

foo.call(bar);
foo.apply(bar);
foo.bind(bar)();