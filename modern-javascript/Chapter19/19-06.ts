const obj = {};
// @ts-ignore
const parent = {x: 1};

// getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
// @ts-ignore
obj.__proto__;

// setter 함수인 set__proto__가 호출되어 obj 객체의 프로토타입을 교체
// @ts-ignore
obj.__proto__ = parent;

// @ts-ignore
console.log(obj.x);