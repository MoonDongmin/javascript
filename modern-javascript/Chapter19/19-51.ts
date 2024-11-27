// 프로토타입이 null인 객체를 생성. 생성된 객체는 프로토타입 체인의 종점에 위치
// obj -> null
let obj = Object.create(null);
console.log(Object.getPrototypeOf(obj) === null)
// Object.prototype을 상속받지 못함
//console.log(obj.toString());

// obj -> Object.prototype -> null
// objc = {}; 와 동일
obj = Object.create(Object.prototype);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

// obj -> Object.Prototype -> null
// obj = {x:1}; 와 동일
obj = Object.create(Object.prototype, {
    x: {value: 1, writable: true, enumerable: true, configurable: true}
});
// 위 코드는 아래와 동일
// obj = Object.create(Object.prototype);
// obj.x = 1;
console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === Object.prototype);

const myProto = {x: 10};
// 임의의 객체를 직접 상속 받음
// obj -> myProto -> Object.prototype -> null
obj = Object.create(myProto);
console.log(obj.x);
console.log(Object.getPrototypeOf(obj) === myProto);

//생성자 함수
function Person(name) {
    this.name = name;
}

// obj -> Person.prototpye -> Object.prototype -> null
// obj = new Person('Moon')와 동일
obj = Object.create(Person.prototype);
obj.name = 'Moon';
console.log(obj.name);
console.log(Object.getPrototypeOf(obj) === Person.prototype);