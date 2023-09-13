// 수퍼클래스
class Base {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
}

// 서브클래스
class Derived extends Base {
    // constructor(...args) {super(...args);}
}

const derived = new Derived(1, 2);
console.log(derived);