// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Moon');

// me 객체의 생성자 함수는 Person 임
console.log(me.constructor === Person);