// 생성자함수
function Person(name) {
    this.name = name;
}

// 프로토타입 메서드
Person.prototype.sayHi = function () {
    console.log(`Hi! My name is ${this.name}`);
}

const me = new Person('Moon');
me.sayHi();