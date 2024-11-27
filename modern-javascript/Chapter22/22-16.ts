function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

const me = new Person('Moon');

// getName 메서드를 호출한 객체는 me임
console.log(me.getName());

Person.prototype.name = "Kim";

// getName 메서드를 호출한 객체는 Person.prototype임
console.log(Person.prototype.getName());
