// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Moon');

// 결국 Person.prototype과 me.__proto__ 는 결국 동일한 프로토타입을 가짐
console.log(Person.prototype === me.__proto__);