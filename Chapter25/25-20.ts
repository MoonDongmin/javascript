class Person {
    constructor(name) {
        this.name = name;

        // 명시적으로 객체를 반환하면 암묵적인 this 변환이 무시됨
        return {};
    }
}

const me = new Person('Moon');
console.log(me);