// 2. Object 생성자 함수에 의한 객체 생성
// 인수가 전달되지 않았을 때 추상 연산자 OrdinaryObjectCreate를 호출하여 빈 객체 생성
let obj = new Object();
console.log(obj);

// 1. new.target이 undefined나 Object가 아닌 경우
// 인스턴스 -> Foo.prototype -> Object.prototype 순으로 프로토타입 체인 생성
class Foo extends Object {
}

new Foo();

// 3. 인수가 전달된 경우 인수를 객체로 변환
// Number 객체 생성
obj = new Object(123);
console.log(obj);

// String 객체 생성
obj = new Object('123');
console.log(obj);