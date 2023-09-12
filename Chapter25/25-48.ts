class Person {
    constructor(name) {
        this.name = name; // 인스턴스 프로퍼티는 기본적으로 public 함
    }
}

const me = new Person('Moon');
console.log(me.name);