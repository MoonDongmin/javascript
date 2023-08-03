// 함수 정의가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 도불어 생성됨
console.log(Person.prototype);

// 생성자 함수
function Person(name) {
    this.name = name;
}