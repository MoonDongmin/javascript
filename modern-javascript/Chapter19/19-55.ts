const myProto = {x: 10};

//객체 리터럴에 의해 객체를 생성하면서 프로토타입을 지정하여 직접 상속받을 수 있음
const obj = {
    y: 20,
    // 객체를 직접 상속받음
    // obj -> myProto -> Object.prototype -> null
    __proto__: myProto
};

// @ts-ignore
console.log(obj.x, obj.y);
console.log(Object.getPrototypeOf(obj) === myProto);