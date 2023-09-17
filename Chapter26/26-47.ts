class Base {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `Hi! ${this.name}`;
    }
}

class Derived extends Base {
    // 화살표 함수의 super는 상위 스코프인 constructor의 super를 가리킴
    sayHi() {
        return `${super.sayHi()} how are you doing`;
    }
}

const derived = new Derived('Moon');
console.log(derived.sayHi());