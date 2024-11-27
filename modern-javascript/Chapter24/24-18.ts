const Person = (function () {
    let _age = 0; // private

    // 생성자 함수
    function Person(name, age) {
        this.name = name;
        _age = age;
    }

    //프로토 타입 메서드
    Person.prototype.sayHi = function () {
        // Person 생성자 함수의 지역 변수 _age를 참조할 수 없음
        // @ts-ignore
        console.log(`Hi! My name is ${this.name}. I am ${_age}.`);
    };

    // 생ㅅ어자 함수 반환
    return Person;
})

// @ts-ignore
const me = new Person('Moon', 24);
me.sayHi();
console.log(me.name);
console.log(me._age);

// @ts-ignore
const you = new Person('Kim', 20);
you.sayHi();
console.log(you.name);
console.log(you._age);
