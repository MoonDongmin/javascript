class Person {
    constructor(name) {
        this.name = name;

        // 명시적으로 원식밧을 반환하면 원식밧 반환은 무시되고 암묵적으로 this가 반환
        return 100;
    }
}

const me = new Person('Moon');
console.log(me);