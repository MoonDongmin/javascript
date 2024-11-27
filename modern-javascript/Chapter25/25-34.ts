class Person {
    constructor(name) {
        // 인스턴스 프로퍼티
        this.name = name; // name 프로퍼티는 public하다
    }
}

const me = new Person('Moon');

// name은 public 하다
console.log(me);