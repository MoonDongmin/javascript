function Person(name) {
    this.name = name;
}

// 포로토타입 메서드
Person.prototype.sayHello = function () {
    console.log(`Hi My name is ${this.name}`);
}

const me = new Person('Moon');

console.log(me.hasOwnProperty('name'));