// 생성자 함수
function Person(name) {
    this.name = name;
}

const me = new Person('Moon');

// 프로토타입으로 교체할 객체
// @ts-ignore
const parent = {};

// 프로토타입의 교체
// @ts-ignore
Object.setPrototypeOf(me, parent);

// Person 생성자 함수와 parent 객체는 연결되어 있지 않음
console.log(Person.prototype === parent);
console.log(parent.constructor === Person);

// Person.prototype이 me 객체의 프로토타입인 체인 상에 존재하지 않기에 거짓
console.log(me instanceof Person);

// Object.prototype이 me 객체의 프로토타입 체인 상에 존재하기에 참
console.log(me instanceof Object);