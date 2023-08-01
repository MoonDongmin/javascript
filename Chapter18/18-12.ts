const obj = {a: 1};

// 객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype임
console.log(obj.__proto__ === Object.prototype);

// 객체 릴터럴 방시으로 생성ㅎ나 객체는 프로토타입 객체만 Object.prototype의 프로퍼티를 상속
// hasOwnProperty 메서드는 Object.prototype의 메서드
console.log(obj.hasOwnProperty('a'));
console.log(obj.hasOwnProperty('__proto__'));