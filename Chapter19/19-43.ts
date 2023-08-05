function Person(name) {
    this.name = name;
}

const me = new Person('Moon');

// 프로토타입으로 교체할 객체
// @ts-ignore
const parent = {
    sayHello() {
        console.log(`Hi My name is ${this.name}`);
    }
};

// 1. me 객체의 프로토타입을 parent 객체로 교체함
// @ts-ignore
Object.setPrototypeOf(me, parent);
// 위 코드는 아래 코드와 동일하게 동작
// me.__proto__ = parent;

me.sayHello();